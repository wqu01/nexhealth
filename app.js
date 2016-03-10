(function(){
    var app = angular.module('appointments', [ ]); 
   
    app.controller("ApptController", function($scope, $http){
        var req = {
            method: 'GET',
            url: 'https://nexhealth.info/appointments?subdomain=test&timezone=America/New_York',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'ioljZQCwJHq6JDZGFyR6Ug',
            }
        };
   
        $http(req).then(function successCallback(response){
            $scope.results = response.data;
        }, function errorCallBack(response){
            $scope.results = "error";
        });
        
        var inCurrentTimeZone = function(dateTime){
            var newDate = (new Date(dateTime)).toLocaleString();
            return newDate;
        };

        $scope.inCurrentTimeZone = inCurrentTimeZone;

        var in24Hrs = function(dateTime){
            var currentTime = new Date().getTime();
            var apptTime = (new Date(dateTime)).getTime();
            var timeDiff = apptTime - currentTime;
            if (timeDiff <= (24 * 60 * 60 * 1000) && timeDiff > 0) 
                return true;
            else{
                return false;
            }
        }

        $scope.in24Hrs = in24Hrs;
    
    });
    




})();
