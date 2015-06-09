import React from 'react';

var ViewEmployeeCounter = React.createClass({

  render: function() {
    console.log("ViewEmployeeCounter");
    return (
        <div><span className="badge">{this.props.employees.length}</span></div>
    );
  }

})

export default ViewEmployeeCounter;