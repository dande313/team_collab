import React from 'react';

const Secret = () => {
	
	const ListTroublesomeEmployees = (event) =>{
		console.log("Employees we don't like:");
		console.log("Timmy - Plays too much Minecraft at work");
		console.log("Susan - Clips toenails in the breakroom.");
		console.log("Bert - He's got a man-bun.");
		console.log("Betsey - She's better looking than any of us, and we hate her for it.")
	}

	return (
	<div>
		<br/>
  		<a onClick={ListTroublesomeEmployees}>Nothing to see here</a>
  	</div>
  	)
 }

export default Secret;