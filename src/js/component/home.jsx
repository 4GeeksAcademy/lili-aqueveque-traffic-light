import React, { useState } from "react";

const TrafficLight = () => {
	const [activeLight, setActiveLight] = useState(null);

	const handleLightClick = (light) => {
		setActiveLight(light);
	};

	return (
		<div className="traffic">
			<div className="stick"></div>
			<div className="box text-center">
				<div
					className={`red light ${activeLight === 'red' ? 'on' : ''}`}
					onClick={() => handleLightClick('red')}
				></div>
				<div
					className={`yellow light ${activeLight === 'yellow' ? 'on' : ''}`}
					onClick={() => handleLightClick('yellow')}
				></div>
				<div
					className={`green light ${activeLight === 'green' ? 'on' : ''}`}
					onClick={() => handleLightClick('green')}
				></div>
			</div>
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