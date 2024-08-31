// custom.js
import { html } from "htl";

export function defineTable() {
  const sampleData = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 35 },
    { id: 3, name: "Charlie", age: 40 },
  ];

  return function (runtime, observer) {
    const main = runtime.module();

    main.variable(observer()).define(
      "tableView",
      ["html"],
      html`
        <table class="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            ${sampleData.map(
              (row) => html`
                <tr>
                  <td>${row.id}</td>
                  <td>${row.name}</td>
                  <td>${row.age}</td>
                </tr>
              `
            )}
          </tbody>
        </table>
      `
    );

    return main;
  };
}

// Sample data - replace this with your actual data source or data fetching logic
