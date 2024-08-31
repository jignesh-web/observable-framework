import * as React from "npm:react";
const sampleData = [
  {id: 1, name: "Alice", age: 30},
  {id: 2, name: "Bob", age: 35},
  {id: 3, name: "Charlie", age: 40},
];
function Table() {
  return (
    <table class="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {sampleData.map((row, id) => (
          <tr key={id}>
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export {Table};
