const fs = require("fs")
const path = require("path")
const ignore = require("ignore")

// Create write stream
const writeStream = fs.createWriteStream("visible_files_and_folders.txt")

// Read .gitignore and create an ignore manager
let ig = ignore()
if (fs.existsSync(".gitignore")) {
  const gitignore = fs.readFileSync(".gitignore").toString()
  ig = ignore().add(gitignore)
}

// Function to list files
function listFiles(dir, level = 0) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const fullPath = path.join(dir, file).replace("./", "")
    const relativePath = fullPath.replace(__dirname + path.sep, "")

    if (!ig.ignores(relativePath)) {
      writeStream.write("  ".repeat(level) + file + "\n")

      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        listFiles(fullPath, level + 1)
      }
    }
  })
}

// Run the function from the root directory
listFiles("./")

// Close the write stream
writeStream.end()
