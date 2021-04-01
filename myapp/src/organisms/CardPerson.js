import React from "react";

function CardPerson(props) {
  return (
    <>
      <li>{props.name}</li>
      <span>Age: 20</span>
    </>
  );
}

export default CardPerson;
