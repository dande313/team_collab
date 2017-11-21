import React from 'react';
import Introduction from './Introduction';

const Home = (props) =>
	<div className="welcome-note">
	  <br/>
	  <h2>Introduction</h2>
	  <Introduction component={Introduction}/>
  	</div>

export default Home;