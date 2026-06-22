const fs = require('fs');
const path = require('path');

const files = [
  'src/app/3d-printers/lcd-dlp-3d-printers/[slug]/page.tsx',
  'src/app/3d-printers/lcd-dlp-3d-printers/page.tsx',
  'src/app/product-page/[slug]/page.tsx',
  'src/app/product/3d-printing-resin/[slug]/page.tsx',
  'src/app/product/3d-printing-resin/page.tsx',
  'src/app/product/techno-polymers-filaments/[slug]/page.tsx',
  'src/app/product/techno-polymers-filaments/page.tsx',
  'src/app/3d-printers/[brand]/page.tsx'
];

for (const relPath of files) {
  const filePath = path.join(__dirname, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Add useCart import if not present
  if (!content.includes('import { useCart }')) {
    content = content.replace(/(import .* from "@\/data\/.*";?)/, '$1\nimport { useCart } from "@/context/CartContext";');
    changed = true;
  }

  // Handle List pages vs Detail pages
  const isListPage = !relPath.includes('[slug]') && !relPath.includes('[brand]');
  
  if (isListPage) {
    if (!content.includes('const { addToCart } = useCart();')) {
      content = content.replace(/const router = useRouter\(\);/, 'const router = useRouter();\n  const { addToCart } = useCart();');
      changed = true;
    }

    // Replace the button onClick to push to router
    // Find: onClick={() => { if (!product.outOfStock) { router.push(`/.../${product.slug}`); } }}
    // Replace with: onClick={() => { if (!product.outOfStock) { addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }); } }}
    const routerPushRegex = /onClick=\{\(\) => \{\s*if \(\!product\.outOfStock\) \{\s*router\.push\([^)]+\);\s*\}\s*\}\}/g;
    if (routerPushRegex.test(content)) {
      content = content.replace(routerPushRegex, `onClick={() => {
                    if (!product.outOfStock) {
                       addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
                    }
                  }}`);
      changed = true;
    }
  } else {
    // Detail pages or [brand] pages
    // They have [quantity, setQuantity] or similar
    if (!content.includes('const { addToCart } = useCart();')) {
      if (content.includes('const [quantity, setQuantity] = useState(1);')) {
        content = content.replace(/const \[quantity, setQuantity\] = useState\(1\);/, 'const { addToCart } = useCart();\n  const [quantity, setQuantity] = useState(1);');
      } else {
        content = content.replace(/const router = useRouter\(\);/, 'const router = useRouter();\n  const { addToCart } = useCart();');
      }
      changed = true;
    }

    // [brand] page has a product mapping with addToCart
    if (relPath.includes('[brand]')) {
      // It maps products. Similar to list page.
      const btnRegex = /<button[^>]*>\s*<ShoppingCart[^>]*\/>\s*\{product\.outOfStock \? "Out of Stock" : "Add to Cart"\}\s*<\/button>/g;
      
      // Let's replace the whole button if it exists
      content = content.replace(/<button([^>]*)>\s*<ShoppingCart([^>]*)\/>\s*\{product\.outOfStock \? "Out of Stock" : "Add to Cart"\}\s*<\/button>/g, (match, p1, p2) => {
        // if onClick doesn't exist, we add it. Wait, the original button in [brand] might not have onClick
        if (!match.includes('onClick')) {
          return `<button${p1} onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 })}>\n<ShoppingCart${p2}/>\n{product.outOfStock ? "Out of Stock" : "Add to Cart"}\n</button>`;
        }
        return match;
      });

      // Also there is another button: {product.outOfStock ? "OUT OF STOCK" : "ADD TO CART"}
      content = content.replace(/<button([^>]*)>\s*<ShoppingCart([^>]*)\/>\s*\{product\.outOfStock \? "OUT OF STOCK" : "ADD TO CART"\}\s*<\/button>/g, (match, p1, p2) => {
        if (!match.includes('onClick')) {
          return `<button${p1} onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: quantity || 1 })}>\n<ShoppingCart${p2}/>\n{product.outOfStock ? "OUT OF STOCK" : "ADD TO CART"}\n</button>`;
        }
        return match;
      });
      changed = true;
    } else {
      // standard Detail Page
      // Has: <button ...> <ShoppingCart /> {product.outOfStock ? "OUT OF STOCK" : "ADD TO CART"} </button>
      // Replace the <button with onClick
      const detailBtnRegex = /<button([^>]*)>\s*<ShoppingCart([^>]*)\/>\s*\{((?:product\.)?outOfStock) \? "OUT OF STOCK" : "ADD TO CART"\}\s*<\/button>/g;
      content = content.replace(detailBtnRegex, (match, p1, p2, p3) => {
        if (!match.includes('onClick')) {
          return `<button${p1} onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: quantity || 1 })}>\n<ShoppingCart${p2}/>\n{${p3} ? "OUT OF STOCK" : "ADD TO CART"}\n</button>`;
        }
        return match;
      });

      // what if the text is "Add to Cart" with capitalized Add
      const detailBtnRegex2 = /<button([^>]*)>\s*<ShoppingCart([^>]*)\/>\s*\{((?:product\.)?outOfStock) \? "Out of Stock" : "Add to Cart"\}\s*<\/button>/g;
      content = content.replace(detailBtnRegex2, (match, p1, p2, p3) => {
        if (!match.includes('onClick')) {
          return `<button${p1} onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: quantity || 1 })}>\n<ShoppingCart${p2}/>\n{${p3} ? "Out of Stock" : "Add to Cart"}\n</button>`;
        }
        return match;
      });

      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${relPath}`);
  }
}
