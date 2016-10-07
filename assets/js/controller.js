var app = angular.module("Selecc",[]);

app.controller("FirstController",function($scope, $http){

	$http.get('https://servicios-prueba-aquilino-pinto.c9users.io/preguntas/consultar')
		.success(function(data){
			$scope.datos = data;
		});


	$scope.borrar = function(item,pos){
		//console.log(pos);
		$scope.datos = $scope.datos.filter(function(activity){
			return activity != item;
		});
	};

	$scope.actualiza = function(valor){
		console.log(valor);
	}

});
