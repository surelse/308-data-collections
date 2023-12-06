let lines = csvString.split('\n');
//using const map1 = array1.map((x) => x * 2);
let header = lines[0].split(',').map(header => header.toLowerCase());;
let result = [];
for(let i =1; i<lines.length;i++){
    let values = lines[i].split(‘,’);
    let dataObj ={}
for(let j=0; j< header.length;j++){
    dataObj[header[j]]= values[j];
}
    result.push(dataObj)
}
console.log(result.pop());
console.log("After pop: ",result);
console.log(result.splice(1, 0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" }))
console.log("After splice: ",result);
console.log(result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }));
console.log("After push: ",result);
let totalAge = 0;
for(let i=0;i<result.length;i++){
    totalAge +=parseInt(result[i].age);
    console.log("total ages: ",totalAge , result[i].age)
}
let avrageAge = totalAge/result.length
console.log("avrageAge: ",Math.round(avrageAge))