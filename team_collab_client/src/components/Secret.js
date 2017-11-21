import React from 'react';

const Secret = () => {
	
	const ourGreatSecret = (event) =>{
		let secrets = ["Meta Labor Locator", "Boar Mate Boar Collator", "A Tame Collar Robot", "Meat Altar Bro Loco", "Arab Color Tea Molt", "Cobra Atoll or Meat?", "Lab Coral Mare Toot", 
		"Colt Bola Ate Armor","Boat Corral to Meal", "Abort Amoral Eclat","A Motorboat Caller", "Bromate Allocator", "Arboreal Tact Loom", "Clam Realtor Taboo", "Lateral Robot Coma", "Carrot Ablate Loom" ]
		let secret = secrets[Math.floor(Math.random()*secrets.length)]
		let x=document.getElementsByClassName("title");
	    for(var i = 0; i < x.length; i++){
	    x[i].innerText=secret;
	    }
	}

	return (
	<div>
		<br/>
  		<a onClick={ourGreatSecret}>Nothing to see here</a>
  	</div>
  	)
 }

export default Secret;