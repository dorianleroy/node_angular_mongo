/**
 * Created by Roman Orlov
 * Date: 05.02.16
 * Time: 17:49
 */
var myApp = angular.module('listModule',[]).
	controller('listCtrl', ['$http', '$scope', function($http, $scope){
		$scope.newPerson = {};
		$scope.showAddingForm = false;
		$http.post('/contactlist').then(function(data){
			$scope.persons = data.data;
		});
		$scope.editPerson = function(){
			if (!this.person.showEditingPerson){
				this.person.showEditingPerson = true;
				$scope.newPerson.name = this.person.name;
//				$scope.newPerson.email = this.person.email;
//				$scope.newPerson.phone = this.person.phone;
				$scope.showAddingForm = false;
				$scope.addPerson();
				return;
			}
		};
		$scope.addPerson = function(){
			if (!$scope.showAddingForm){
				$scope.showAddingForm = true;
				return;
			}
			console.log($scope.newPerson);
			$http.post('/add_contact', $scope.newPerson).success(function(res){ console.log("Added"); })
			return;
			$scope.persons.push($scope.newPerson);
			$scope.newPerson = {};
			$scope.showAddingForm = false;
		};
		$scope.removePerson = function(id){
//			$scope.persons.splice($scope.persons.indexOf(this.person), 1);
			console.log('Sending request for deleting...' + id);
			$http.delete('/contactlist/' + id).success(function(response){ console.log("Response is gotten"); })
		};
	}]);