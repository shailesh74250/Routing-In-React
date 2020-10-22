// useHistory 
// the useHistory hook gives you access to the history instance that you may use to navigate

import React from 'react';
import {useHistory} from 'react-router-dom';

function HomeButton() {
	let history = useHistory();

	function handleClick() {
		history.push('/home');
	}

	return (
			<button type='button' onClick={handleClick}>
				Go home
			</button>
		)
}