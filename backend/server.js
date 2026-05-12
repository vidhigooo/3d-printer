const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs/promises');
const fsSync = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve uploads statically
const uploadsDir = path.join(__dirname, 'uploads');
if (!fsSync.existsSync(uploadsDir)) {
  fsSync.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static(uploadsDir));

// Configure multer for file uploads
const storage = multer.memoryStorage(); // We'll save it manually for validation logic parity
const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 } // 100MB limit
}).single('file');

const ALLOWED_EXTENSIONS = [".stl", ".step", ".stp", ".iges", ".igs", ".obj"];

app.post('/api/upload', (req, res) => {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: "File exceeds 100MB limit" });
      }
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: "An error occurred during upload" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const originalFilename = req.file.originalname;
    const extension = path.extname(originalFilename).toLowerCase();
    
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      return res.status(400).json(
        { error: `Invalid file format. Allowed: ${ALLOWED_EXTENSIONS.join(", ")}` }
      );
    }

    try {
      const uniqueFilename = `${Date.now()}-${originalFilename.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const filePath = path.join(uploadsDir, uniqueFilename);
      
      await fs.writeFile(filePath, req.file.buffer);

      return res.json({
        success: true,
        message: "File uploaded successfully",
        filename: uniqueFilename,
      });
    } catch (writeErr) {
      console.error(writeErr);
      return res.status(500).json({ error: "Failed to write file to disk" });
    }
  });
});

app.get('/api/files', async (req, res) => {
  try {
    const fileNames = await fs.readdir(uploadsDir);
    
    // Get file stats
    const fileStats = await Promise.all(
      fileNames.map(async (name) => {
        const filePath = path.join(uploadsDir, name);
        const stats = await fs.stat(filePath);
        return {
          name,
          size: stats.size,
          date: stats.birthtime,
          url: `http://localhost:${PORT}/uploads/${name}`, // Absolute url
        };
      })
    );
    
    // Sort by date (newest first)
    const files = fileStats.sort((a, b) => b.date.getTime() - a.date.getTime());
    
    res.json(files);
  } catch (error) {
    console.error("Error reading uploads directory:", error);
    res.status(500).json({ error: "Could not retrieve files" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server successfully started on port ${PORT}`);
});
