import React from 'react';
import FluxComponent from 'flummox/component';
import flux from './app.jsx'
import ViewEmployees from './ViewEmployees.jsx';
import ViewEmployeeCounter from './ViewEmployeeCounter.jsx';
import ViewEmployeesFilter from './ViewEmployeesFilter.jsx';

class View extends React.Component {
  render() {
    return ( 
    	<div>    	
	    	<FluxComponent  flux={flux} connectToStores={['store']}>        
	    		<ViewEmployeeCounter/>
	    	</FluxComponent>

	    	<FluxComponent  flux={flux} connectToStores={['store']}>        
	        	<ViewEmployeesFilter/>
	        	<ViewEmployees/>
	    	</FluxComponent>
    	</div>
    );
  }

}

window.Flux = {
  View: View,
  React: React
}