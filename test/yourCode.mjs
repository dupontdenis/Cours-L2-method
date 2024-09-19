// Placeholder function for custom logic
export function yourCode(data) {
  // Put your code here except the function signature

  // filter the category of products
  const fruits = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].category.toLowerCase() === "fruits") {
      fruits.push(data[i]);
    }
  }

  return fruits;
}
