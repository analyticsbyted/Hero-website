// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs'; // Import the file system module
import path from 'path'; // Import the path module

export default defineConfig({
  plugins: [react(), 
  {
    name: 'copy-robots-txt',
    apply: 'build', 
    writeBundle(options) {
      const robotsTxtPath = path.resolve(__dirname, 'robots.txt');
      const outputRobotsTxtPath = path.join(options.dir, 'robots.txt'); 
      fs.copyFileSync(robotsTxtPath, outputRobotsTxtPath); 

      // Copy error.html
      const errorHtmlPath = path.resolve(__dirname, "error.html");
      const outputErrorHtmlPath = path.join(options.dir, "error.html");
      fs.copyFileSync(errorHtmlPath, outputErrorHtmlPath);
    }
  }], 
});
