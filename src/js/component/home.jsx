import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default TrafficLight;

//Instrucciones:
//The light has to glow when clicked.
/*
The whole purpose of the component is to display a traffic light with red, yellow and green lights.
When any light is clicked (selected) it has to glow, but the other lights have to stop glowing.
The component must have a hooked state variable that tracks the color:

const [ color, setColor] = useState("red");

Use the setColor function to change the color and the component will automatically re-render (because it's hooked with useState).



*/