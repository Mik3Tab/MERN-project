import React from 'react';
import './NotFound.scss';
const NotFound = () => {
  return (
    <div>
   	<main className="NotFound-container">
		<section className="section--image">
			<img src="https://vetri-suriya.web.app/devchallenges/404-not-found/Scarecrow.png" alt=""/>
		</section>
		<section className="section--content">
			<h5>I have bad news for you</h5>
			<p>The page you are looking for doesn't exist or is temporarily unavailable</p>
			<button>back to homepage</button>
		</section>
	</main>
    </div>
  )
}

export default NotFound