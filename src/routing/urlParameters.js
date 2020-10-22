import React from 'react';
import {
	BrowserRouter as Router, 
	Switch,
	Route,
	Link,
	useParams
} from 'react-router-dom';

//  params are placeholders in the URL that design with a colon, like the ':id' param defined in the route in this
// example. A similar convention is used for matching dynamic segments in other popular web frameworks like rails and express

export default function ParamsExample() {
	return (
			<Router>
				<div>
					<h2>Accoutns </h2>
					<ul>
						<li>
							<Link to="/netflix">Netflix</Link>
						</li>
						<li>
							<Link to="/zillow-group">zillow group</Link>
						</li>
						<li>
							<Link to="/modus-create">Modus Create</Link>
						</li>
					</ul>
					<Switch>
						<Route path="/:id" children={<Child />} />
					</Switch>
				</div>
			</Router>
		);
}

function Child() {
	let {id} = useParams();
	console.log(useParams());
	return (
		<div>
			<h3>ID: {id}</h3>
		</div>
	)
}