//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "props-types";

//include bootstrap npm library into the bundle
import "bootstrap";

import './icons.js';

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SimpleCounter(props){
    return (<div className="bigCounter">
            <div className="calendar">
                <i class="far fa-clock"></i>
            </div>
            <div className="secondsSeven">{props.digitSeven}</div>
            <div className="secondsSix">{props.digitSix}</div>
            <div className="secondsFive">{props.digitFive}</div>
            <div className="secondsFour">{props.digitFour}</div>
            <div className="secondsThree">{props.digitThree}</div>
            <div className="secondsTwo">{props.digitTwo}</div>
            <div className="secondsOne">{props.digitOne}</div>
    </div>);
}

let count= 0;
setInterval(function(){
const seven=Math.floor(counter/10000000);
const six=Math.floor(counter/1000000);
const five=Math.floor(counter/100000);
const four=Math.floor(counter/10000);
const three=Math.floor(counter/1000);
const two=Math.floor(counter/100);
const one=Math.floor(counter/10);
//render your react application
ReactDOM.render(<SimpleCounter digitOne={}/>, document.querySelector("#app"));
},1000);