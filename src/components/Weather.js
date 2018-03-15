import React from 'react';
//THIS IS STATELESS, so no need class keyword
//just need arrow function for React 16
// if only returning one single element, eg: <div>, then no need render keyword
// if only single element, no need () for props

const Weather = props => (
	<div className="weather__info">
		{
			props.city && props.country && 
			<p className="weather__key">Location: 
			<span className="weather__value"> {props.city}, {props.country}</span>
			</p> 
		}
		{
			props.temperature && 
			<p className="weather__key">Temperature: 
			<span className="weather__value"> {props.temperature}</span>
			</p> 
		}
		{
			props.humidity && 
			<p className="weather__key">Humidity: 
			<span className="weather__value"> {props.humidity}</span>
			</p> 
		}
		{
			props.description && 
			<p className="weather__key">Conditions: 
			<span className="weather__value"> {props.description}</span>
			</p> 
		}
		{
			props.error && 
			<p className="weather__error">
			{props.error}
			</p>
		}
	</div>
);

export default Weather;