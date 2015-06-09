import { Actions } from 'flummox';
import _ from 'underscore';

class ActionEmployee extends Actions {

	filter(filter){
		console.log("filter");
		return this.loadEmployees(filter);
	}

	loadEmployee(id){
		return this.loadEmployees({uuid: id});
	}

	saveEmployee(employee){
		return this.saveEmployeeInner(employee);
	}



	loadEmployees(filter){
		var react =  this;
		return new Promise(
			function(resolve, reject){
				setTimeout(function(){ resolve(react.httpRequest_getEmployees(filter)) }, 1000);
			}
		);		
	}

	saveEmployeeInner(employee){
		var react =  this;
		return new Promise(
			function(resolve, reject){
				setTimeout(function(){ resolve(react.httpRequest_saveEmployees(employee)) }, 1000);
			}
		);		
	}

	httpRequest_saveEmployees(employee){
		var array = this.httpRequest_getEmployees();
		array.forEach(function(value, index, array){
			if(value.uuid = employee.uuid)
				_.extend(value, employee);
		})
	}

	httpRequest_getEmployees(filter){
		var array = [
			{	uuid:"00000001",
				email:"ivanov@mail.net",
				name:"Иван",
				secname:"Иванов",
				middlename:"Иванович",
				org:"Детский сад №1",
				position:"Директор",
				snils:"000-000-000 1"},

			{	uuid:"00000002",
				email:"petrov@mail.net",
				name:"Петр",
				secname:"Петров",
				middlename:"Петрович",
				org:"Детский сад №2",
				position:"Глав. бух",
				snils:"000-000-000 2"},
				
			{	uuid:"00000003",
				email:"sidorov@mail.net",
				name:"Сидр",
				secname:"Сидоров",
				middlename:"Сидорович",
				org:"Детский сад №3",
				position:"Главный помощник младшей уборщицы",
				snils:"000-000-000 3"}
		];
		if(! filter) return array;
		return array.filter(function(emp){
			var intoResult = false;
			if(filter.id) return filter.uuid == emp.uuid;
			if(filter.text == "") intoResult = true;
			if(filter.text) {
				intoResult = intoResult 
					|| emp.name.toLowerCase().indexOf(filter.text.toLowerCase()) > -1
					|| emp.secname.toLowerCase().indexOf(filter.text.toLowerCase()) > -1
					|| emp.middlename.toLowerCase().indexOf(filter.text.toLowerCase()) > -1
					|| emp.org.toLowerCase().indexOf(filter.text.toLowerCase()) > -1
					|| emp.position.toLowerCase().indexOf(filter.text.toLowerCase()) > -1
					|| emp.email.toLowerCase().indexOf(filter.text.toLowerCase()) > -1
					;
			}

			return intoResult;
		});
	}


}

export default ActionEmployee ;