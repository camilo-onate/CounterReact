//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="secondsSeven">{props.digitSeven % 10}</div>
			<div className="secondsSix">{props.digitSix % 10}</div>
			<div className="secondsFive">{props.digitFive % 10}</div>
			<div className="secondsFour">{props.digitFour % 10}</div>
			<div className="secondsThree">{props.digitThree % 10}</div>
			<div className="secondsTwo">{props.digitTwo % 10}</div>
			<div className="secondsOne">{props.digitOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number,
	digitSeven: PropTypes.number
};

let count = 0;
setInterval(function() {
	const seven = Math.floor(count / 1000000);
	const six = Math.floor(count / 100000);
	const five = Math.floor(count / 10000);
	const four = Math.floor(count / 1000);
	const three = Math.floor(count / 100);
	const two = Math.floor(count / 10);
	const one = Math.floor(count / 1);
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
			digitSeven={seven}
		/>,
		document.querySelector("#app")
	);
	count++;
}, 1000);
//render your react application
