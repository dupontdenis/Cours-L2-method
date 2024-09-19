export function logData(message, data) {
  console.log(message);
  if (Array.isArray(data)) {
    console.table(data);
  } else {
    console.log(data);
  }
}
