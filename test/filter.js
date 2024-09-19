


// filter the category of products that are fruits
const fruits = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].category === "Fruits") {
    fruits.push(products[i]);
  }
}


// same with for of
const fruits2 = [];
for (const product of products) {
  if (product.category === "Fruits") {
    fruits2.push(product);
  }
}

// filter the category of products that are Vegetablesables
const vegetables = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].category === "Vegetables") {
    vegetables.push(products[i]);
  }
}
console.table(vegetables);

// could you refactor my code whit the use of a function with two arguments a array and a callback function
// the callback function should return a boolean value

// Function to filter an array based on a callback function
function filterArray(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

// Function to filter an array based on a callback function
function filterArray(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

// Callback function to filter fruits
const isFruit = (product) => product.category === "Fruits";

// Callback function to filter vegetables
const isVegetable = (product) => product.category === "Vegetables";

// Filter fruits using the filterArray function
const fruitsFilterArray = filterArray(products, isFruit);
console.table(fruitsFilterArray);

// Filter vegetables using the filterArray function
const vegetableFilterArray = filterArray(products, isVegetable);
console.table(vegetableFilterArray);

console.table(fruitsFilterArray);

// Filter vegetables using the filterArray function

// Function to filter a product based on filter text and stock status
function filterFunction(product, options) {
  const { inStockOnly, filterText } = options;
  const matchesFilterText = filterText
    ? product.name.toLowerCase().startsWith(filterText.toLowerCase())
    : true;
  const matchesStock = inStockOnly ? product.stocked : true;
  return matchesFilterText && matchesStock;
}

const options = {
  inStockOnly: true,
  filterText: "p",
};

// Create a bound function with the options object
const boundFilterFunction = (product) => filterFunction(product, options);

const filteredProducts = filterArray(products, boundFilterFunction);
console.table(filteredProducts);
