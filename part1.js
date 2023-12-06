/ Split the CSV string into rows based on newline characters.
let rows = csvString.split("\n");
for (let i = 0; i < rows.length; i++) {
  // Split the current row into individual elements (id, name, occupation, age)
 // based on the comma delimiter and assign them to respective variables.
 let [cell1, cell2, cell3, cell4] = rows[i].split(",");
    console.log(cell1, cell2, cell3, cell4);
}