const fs = require('fs');

function walk(dir) {
  let results = [];
  let list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    let stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) { 
      results.push(file);
    }
  });
  return results;
}

let files = walk('d:/3d-printer/frontend/src/app');
let modified = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  let parts = content.split('<Link');
  for (let i = 1; i < parts.length; i++) {
    let subparts = parts[i].split('</Link>');
    let linkContent = subparts[0];
    
    if (linkContent.match(/(Get Quote|Get a Quote|Get Instant Quote|Request Custom Quote)/i)) {
      if (linkContent.includes('href="/contact-us"')) {
        subparts[0] = linkContent.replace('href="/contact-us"', 'href="/get-quote"');
      }
    }
    
    if (subparts[0].match(/(Discuss Project|Discuss Your Project|Discuss Your Surface Finishing Project)/i)) {
      if (subparts[0].includes('href="/get-quote"')) {
        subparts[0] = subparts[0].replace('href="/get-quote"', 'href="/contact-us"');
      }
    }
    
    parts[i] = subparts.join('</Link>');
  }
  
  content = parts.join('<Link');
  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated ' + f);
    modified++;
  }
});
console.log('Modified ' + modified + ' files.');
