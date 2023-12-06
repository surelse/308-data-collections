// Part 5: Full Circle
/**
As a final task, transform the final set of data back into CSV format.
There are a number of ways to do this; be creative!
 */
// solution 1
let cvsColumnHeaders = Object.keys(arrObjectPeopleSmallCaseHeaders[0]);
let csvHeader = cvsColumnHeaders.join(",");
let csvRows = arrObjectPeopleSmallCaseHeaders.map((obj) =>
  cvsColumnHeaders.map((key) => obj[key]).join(",")
);
let csvString = [csvHeader, ...csvRows].join("\n");
console.log("Solution 1 ", csvString);
// solution 2
const csvString2 = arrObjectPeopleSmallCaseHeaders
  .map((row) => Object.values(row).join(","))
  .join("\n");
console.log("Solution 2: ", csvString2);