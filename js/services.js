'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');
/*
  var itemServices = angular.module('itemServices', []);
myModule.factory('Feed', function() {
  var shinyNewServiceInstance;
  //factory function body that constructs shinyNewServiceInstance
  return shinyNewServiceInstance;
});
*/
angular.module('myApp.itemServices',['ngResource']).factory('Feed', function($resource){
  		return $resource('http://localhost\\:3000/items.json', {}, {
	    //return $resource('resources/items.json', {}, {
	    query: {method:'GET', params:{}, isArray:true},
	    make: {method:'POST', arams:{}, isArray:false }
	  });
});