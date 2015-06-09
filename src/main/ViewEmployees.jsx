import React from 'react';

var ViewEmployees = React.createClass({

  load: function(){
    this.props.flux.getActions('action').filter();
  },

  render: function() {
    console.log("this.props", this.props);
    var emps = this.props.employees.map(function(item){
      return(
          <div key={item.uuid}>
            <div className="row">
              <div>
                {item.email} {item.middlename} {item.name} {item.secname}
              </div>
              <div>
                {item.org} {item.position}
              </div>
            </div>
          </div>        
      );
    })

    return (
        <div className="grid">
          <div onClick={this.load}><span className="button">Показать Сотрудников</span></div>
          <div className="list">
            {emps}
          </div>
        </div>
    );
  }

})

export default ViewEmployees;