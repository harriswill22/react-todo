import React from "react";

const List = props => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <li
            key={index}
            className="single-todo"
            onClick={() => {
              console.log("you flicked!");
              props.handleClick(index);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
