(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
    	$scope.items=''; 
    	$scope.ans='';
		$scope.displayMessage=function(){
			const after_split=$scope.items.split(',');
			var count=0;
			for(var i=0;i<after_split.length;i++){
			  if(after_split[i]!=''){ //Not condidering empty items
				count=count+1;
			}}
			if(count<=3){
				$scope.ans='Enjoy!';
			}
			else{
				$scope.ans='Too much!';
			}

		};           
    }
		




	})
();