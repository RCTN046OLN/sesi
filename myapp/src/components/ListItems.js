import React from "react";

function ListItems({ items }) {
  return (
    <div>
      {items.length ? (
        <ul>
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      ) : (
        <p>No Items</p>
      )}
    </div>
  );
}

export default ListItems;
