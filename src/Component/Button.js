import React, { useEffect, useState } from "react";

const Button = (props) => {
  const filterItems = props.filterData;
  const menu = props.menu;
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menu.map((current) => {
            console.log("Current item id >>> ", current);
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItems(current.title.id)}
              >
                {current.title.types}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  )
};
export default Button;
