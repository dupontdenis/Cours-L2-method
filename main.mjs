import { readJsonFile } from "./utils/readJsonFile.mjs";
import { yourCode } from "./test/yourCode.mjs";
import { logData } from "./utils/logData.mjs";

// Construct the absolute path to data.json using new URL
const dataFilePath = new URL("./data.json", import.meta.url);

try {
  const data = await readJsonFile(dataFilePath);
  logData("Data before yourCode:", data);

  // Call the yourCode function
  const processedData = yourCode(data);
  logData("Data after yourCode:", processedData);
} catch (error) {
  // Error handling is inside readJsonFile
  console.error("Error:", error);
}