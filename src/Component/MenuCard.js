import React, { useEffect, useState } from "react";

const MenuCard = (props) => {
  let data = props.menuData;

  return (
    <>
      <section className="main-card--cointainer">
        {Array.isArray(data)
          ? data.map((curElement) => {
              return (
                <>
                  <div className="card-container">
                    <div className="card">
                      <div card-body>
                        <span className="card-number card-circle subtle">
                          {curElement.title.id}
                        </span>
                        <span className="card-author subtle">
                          {curElement.title.types}
                        </span>
                        {Array.isArray(curElement.items)
                          ? curElement.items.map((innerEle) => {
                              console.log(innerEle);
                              return (
                                <>
                                  <h6 className="card-title">
                                    {innerEle.itemName}
                                  </h6>
                                  <span className="card-description subtle">
                                    {innerEle.description}
                                  </span>
                                  <div className="card-read">Read</div>
                                </>
                              );
                            })
                          : null}
                      </div>
                      {Array.isArray(curElement.items)
                        ? curElement.items.map((innerEle) => {
                            console.log("image :", innerEle);
                            return (
                              <img src={innerEle.imagePath} alt="image" className="card-media"></img>
                            );
                          })
                        : null}
                      <span
                        className="card-tag subtle"
                      >
                        Order Now
                      </span>
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </section>
    </>
  );
};

export default MenuCard;
