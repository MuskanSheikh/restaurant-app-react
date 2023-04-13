import React, { useEffect, useState } from "react";
import "./todo.css";
const getLocalStorageItem = () => {
  const lists = localStorage.getItem("storedData");
  if(lists){
    return JSON.parse(lists) 
  }else{
    return [];
  }
}

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState(getLocalStorageItem());
  const [isEditItem, setIsEditItem] = useState();
  const [isToggleButton, setToggleButton] = useState(false);

  const addItems = () => {
    const newItem = {
      id: new Date().getTime().toString(),
      name: inputData
    }
    if (!inputData) {
      alert("plzz fill some value");
    } else if (inputData && isToggleButton){
      
        const data =  item.map((curEle) => {
            if(curEle.id === isEditItem.id){
              return {...curEle, name : inputData};
            }else{
              return curEle;
            }
          })
        setItem(data);
        setInputData([]);
        setIsEditItem("");
        setToggleButton(false)
    } else {
      setItem([...item, newItem]);
      setInputData("");
    }
  };
  
  const deleteItem = (id) => {
    const del = item.filter((cur) => {
        return cur.id !== id;
    })
    setItem(del);
  }
  const removeAll = () => {
    setItem([]);
  }

  const editItem = (id) => {
    const edit = item.find((curr) => {
      return curr.id === id;
    })
    if(edit){
      setInputData(edit.name);
      setIsEditItem(edit);
      setToggleButton(true);
    }
  }

  useEffect(() => {
    localStorage.setItem("storedData",JSON.stringify(item))
  },[item])

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {isToggleButton ? 
              <i className="far fa-edit add-btn" onClick={addItems}></i> 
              :
              <i className="fa fa-plus add-btn" onClick={addItems}></i>
            }
          </div>
          {/* show our items  */}
          <div className="showItems">
            {item.map((curr) => {
              return <>
              <div className="eachItem">
              <h3>{curr.name}</h3>
              <i className="far fa-edit add-btn" onClick={() => editItem(curr.id)}></i>
              <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(curr.id)}></i>
            </div>
              </>;
            })}
          </div>

          {/* remove all button  */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
