import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function NavMenu() {

  const options = [
    'PlusPublish Software', 'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  const style = {
    all: "none!important",
    color: "black",
    background: "unset!important",
    border: "unset!important",
    background: "blue!important",
    border: "none!important",
    cursor: "pointer",
    zIndex: "10000",
    position: "absolute",
    top: "0",
  }
  return (
    <div className="navigation-menu">
        <div>
            {/* <span>PlusPublish Software</span>
            <img
            src="/playground_assets/arrowDown.png"
            alt="Vector0180"
            className="navigation-vector12"
            /> */}
            <Dropdown options={options}  value={defaultOption} placeholder="Select an option" style={style}/>
        </div>
        <div>
            {/* <span>Agency Services</span>
            <img
                src="/playground_assets/arrowDown.png"
                alt="Vector0180"
                className="navigation-vector12"
            /> */}
            <Dropdown options={options}  value={defaultOption} placeholder="Select an option"  style={style}/>

        </div>
        <span><a href='#'>References</a></span>
        <span><a href='#'>About us</a></span>
    </div>
  )
}
