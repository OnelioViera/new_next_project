// pages/api/posts.js
import fs from 'fs';
import path from 'path';

export default (req, res) => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  res.status(200).json(slugs);
};
