import fs from "fs/promises"; // Import the fs module

export async function readJsonFile(filePath) {
  try {
    console.log(`Reading data from ${filePath}`);
    const data = await fs.readFile(filePath, "utf-8"); // Read the file
    const jsonData = JSON.parse(data); // Parse the JSON data
    console.log("Data read successfully");
    return jsonData; // Return the parsed JSON data
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Failed to read JSON file: Verify the path of ${filePath}`);
    } else {
      console.error("Failed to read JSON file:", error);
    }
    throw error; // Re-throw the error to be handled by the caller
  }
}