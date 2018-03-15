import React from 'react';
//THIS IS STATELESS, so no need class keyword
//just need arrow function for React 16
// if only returning one single element, eg: <div>, then no need render keyword
// if only single element, no need () for props

const Weather = props => (
	<div>
		{props.city && props.country && <p>Location: {props.city},{props.country}</p> }
		{props.temperature && <p>Temperature: {props.temperature}</p> }
		{props.humidity && <p>Humidity: {props.humidity}</p> }
		{props.description && <p>Conditions: {props.description}</p> }
		{props.error && <p>{props.error}</p>}
	</div>

);

export default Weather;