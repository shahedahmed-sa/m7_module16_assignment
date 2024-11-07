//Module-16_Assignment
//Kazi Shahed Ahmed

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// Create Blog
app.post('/api/blog/create-blog', (req, res) => {
  res.status(201).json({ message: 'Blog created successfully' });
});

// Read Blog
app.get('/api/blog/read-blog', (req, res) => {
  res.status(200).json({ message: 'Blog read successfully' });
});

// Update Blog
app.put('/api/blog/update-blog', (req, res) => {
  res.status(200).json({ message: 'Blog updated successfully' });
});

// Delete Blog
app.delete('/api/blog/delete-blog', (req, res) => {
  res.status(200).json({ message: 'Blog deleted successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
