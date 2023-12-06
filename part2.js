/**
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
 */
let rows = csvData.split("\n");
let arrDataTwoD = [];
for (let i = 0; i < rows.length; i++) {
  let currentRow = rows[i];
  let innerArray = [];
  let currentColumnData = "";
  for (let j = 0; j <= currentRow.length; j++) {
    let currentChar = currentRow[j];
    if (currentChar === "," || j === currentRow.length) {
      innerArray.push(currentColumnData);
      currentColumnData = "";
    } else {
      currentColumnData += currentChar;
    }
  }
  arrDataTwoD.push(innerArray);
}
console.log("==Solution 3==", arrDataTwoD);
// Part 3
let heading = rows[0];
let arrHeading = heading.split(",");
console.log("Heading", arrHeading);
const columnHeaders = rows[0].split(",");
let arrObjectPeople = [];
for (let i = 1; i < rows.length; i++) {
  let columnData = rows[i].split(",");
  let dataObject = {};
  for (let j = 0; j < columnHeaders.length; j++) {
    const key = columnHeaders[j];
    dataObject[key] = columnData[j];
  }
  arrObjectPeople.push(dataObject);
}
console.log("Array of Objects", arrObjectPeople);
