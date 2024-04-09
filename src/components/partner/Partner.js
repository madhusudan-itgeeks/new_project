import React from "react";
import "../partner/Partner.css";

export const Partner = () => {
  const tableData = [
    { name: "shop", age: 30, city: "New York" },
    { name: "Jane Doe", age: 25, city: "Los Angeles" },
    { name: "Bob Smith", age: 35, city: "Chicago" },
    { name: "Bob Smith", age: 35, city: "Chicago" },
    { name: "Bob Smith", age: 35, city: "Chicago" },
    { name: "Bob Smith", age: 35, city: "Chicago" },
  ];

  return (
    <>
      <div>
      <table className="table">
      <thead>
        <tr>
          <th>Shop</th>
          <th>Domain</th>
          <th>IsActive</th>
          <th>Plan</th>
          <th>expdata</th>
          <th>App</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.age}</td>
            <td>{item.age}</td>
            <td>{item.age}</td>
           </tr>
        ))}
      </tbody>
    </table>
      </div>
    </>
  );
};
