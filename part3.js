/** Part 3: Transforming Data
While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
In order to make it more obvious what the data is, we will transform our rows into objects.
Implement the following:
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
Important: While this functionality can be built into the original CSV parser you built in Part 2, we are intentionally creating two different algorithms to test different skillsets. Please leave these sections separate even if it would be more efficient to combine them.
 */
let arrObjectPeopleSmallCaseHeaders = arrObjectPeople.map((item) => {
    return {
      id: item.ID,
      name: item.Name,
      occupation: item.Occupation,
      age: item.Age,
    };
  });
  console.log("Mapped keys to small cases", arrObjectPeopleSmallCaseHeaders);