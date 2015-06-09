import React from 'react';
import {Flux}  from 'flummox';
import FluxComponent from 'flummox/component';
import ActionEmployee from "./Action.jsx";
import ApplicationStore from "./Store.jsx";

class ApplicationFlux extends Flux {

	constructor() {
		super();

	    this.createActions('action', ActionEmployee);

	    this.createStore('store', ApplicationStore, this);		
	}

}

let flux = new ApplicationFlux();

export default flux;