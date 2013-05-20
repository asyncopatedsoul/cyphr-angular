'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);

  function UserController($scope){
  	//TODO link User service

    $scope.initUser = function(userData) {

      //$scope.user = {"fb_token":"","fb_id":1064730199,"cell":4153505920,"id":1,"email":"michael.a.garrido@gmail.com","last_name":"Garrido","first_name":"Michael","location":"Los Angeles, California","updated_at":"2013-05-15T21:12:54Z","created_at":"2013-05-15T21:12:28Z"};
      $scope.user = userData;
      console.log('user set');
    }
  	
  }

//tickets, passes, rooms
  function ItemsFeedController($scope, $resource, $http, Feed){//Feed

        //$scope.name="Anonymous"
        /*
        $scope.items=[
	      	{"offer_id":1,"reserved":false,"id":1,"type_id":1,"price":350.0,"updated_at":"2013-05-15T23:04:11Z","description":"3-day","created_at":"2013-05-15T23:04:11Z"}  
	      ];
				*/
				$scope.items = Feed.query();
        /*
        var feed = $resource('http://localhost\\:3000/items.json');
        $scope.items = feed.get(function() {
          console.log('got items');
          //user.abc = true;
          //user.$save();
        });
        */
        /*$http({method: 'GET', url: 'http://localhost\:3000/items.json'}).
          success(function(data, status, headers, config) {
            console.log('got items');
            // this callback will be called asynchronously
            // when the response is available
          }).
          error(function(data, status, headers, config) {
            console.log('got error');
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
				*/
        $scope.addItem=function(){
        		//var listing = {"price":$scope.itemForm.price,"description":$scope.itemForm.description};
            $scope.tempListing = {"price":$scope.tmpPrice,"description":$scope.tmpDescription,"reserved":false,"type_id":$scope.tmpType,"event_id":$scope.tmpEvent};
            //$scope.items.push(listing);

            //var feed = $resource('http://localhost\\:3000/items.json');
            /*Feed.make(listing,function(a,b) {
              console.log('new item');
              console.log(a);
              console.log(b)

            });
            */
            //var newItem = $http.post('http://localhost\:3000/items.json',{ "item":{"price":55.0,"description":"hello","reserved":false,"type_id":1,"offer_id":1} });
            ///*
            $.ajax({
              //url: 'http://cyphr.herokuapp.com/users.json',
              url: 'http://localhost:3000/items.json',
              type: 'POST',
              //contentType: 'application/json',
              //dataType: 'json',
              //data: { "user": { "first_name": r.first_name, "last_name": r.last_name, "location": r.location.name, "fb_id": r.id, "fb_token":""} },
              //data: JSON.stringify(listing),
              data: { "item": {"price":$scope.tmpPrice,"description":$scope.tmpDescription,"reserved":false,"type_id":$scope.tmpType,"event_id":$scope.tmpEvent}, "user_id": $scope.user['id']},
              //data: {"price":55.0,"description":"hello","reserved":false,"type_id":1,"offer_id":1},
              success: function(resp){
                console.log('item ok');
                console.log(resp);
                $scope.$apply(function(){
                    //$scope.period = '2010 - 2011';
                    $scope.items.push($scope.tempListing);
                    //$scope.items.push(listing);
                });
                
              },
              error: function(resp){
                console.log('item err');
                console.log(resp);
              }
            });
            //*/


        }

    }  
