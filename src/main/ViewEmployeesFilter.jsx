import React from 'react';

var ViewEmployeesFilter = React.createClass({

  keyPress: function(event) {
  	if(event.keyCode == 13)
  		this.props.flux.getActions('action').filter({text: event.target.value});
  },

  render: function() {
    console.log("ViewEmployeesFilter");
    return (
        <div>
        	<span>Фильтр:</span>
        	<input ref="filter" type="text" onKeyUp={this.keyPress}/> 
        </div>
    );
  }

})

export default ViewEmployeesFilter;