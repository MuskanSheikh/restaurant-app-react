import React, { useEffect, useState } from "react";
import "./Style.css";
import { getMenu } from "../../Services/Menu-services";
import MenuCard from "../MenuCard";
import Button from "../Button";

const Restaurant = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    getMenu()
      .then((resp) => {
        const allData = resp;
        setMenuData(allData);
      })
      .catch((error) => console.log(`Error : ${error}`));
  }, []);
  console.log("MenuData >>", menuData);

  const filterItems = (id) => {
    console.log("current clicked element id :", id);

    menuData.map((data) => {
      let updatedItems = data.items.filter((curEle) => curEle.menuId === id);
     
      if(Array.isArray(updatedItems) && updatedItems.length > 0){
        setMenuData([...updatedItems]);
      }  
    });
    console.log("updated var >>> ",menuData)
  };

  return (
    <>
      <div className="container">
        <Button filterData={filterItems} menu={menuData} />
        <MenuCard menuData={menuData} />
      </div>
    </>
  );
};

export default Restaurant;
