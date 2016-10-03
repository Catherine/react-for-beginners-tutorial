import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
	constructor(){
		super();
		//initial state
		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish) {
		//update our state
		const fishes = {...this.state.fishes};
		const timestamp = Date.now();

		//add in new fish
		fishes['fish-${timestamp}'] = fish;

		//set state
		this.setState({ fishes };)
	}


	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order />
				<Inventory />
			</div>
		)
	}
}

export default App;