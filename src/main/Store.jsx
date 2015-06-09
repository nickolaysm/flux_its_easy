import { Store } from 'flummox';

class StoreEmployee extends Store {


	constructor(flux) {
		super();

		const actions = flux.getActions('action');
		this.register(actions.filter, this.handleFilter);
		this.register(actions.loadEmployee, this.handleLoadEmployee);
		this.register(actions.saveEmployee, this.handleSaveEmployee);

		this.state = {
			employees : [],
			employee  : {}
		};
	}


	//Handlers

	handleFilter(message) {
		console.log("handleFilter", message);
		this.setState({
			employees : message
		});
	}

	handleLoadEmployee(message) {
		this.setState({
			employee : message
		});
	}

	handleSaveEmployee(message) {
		this.setState({
			employees : message
		});
	}


}


export default StoreEmployee;