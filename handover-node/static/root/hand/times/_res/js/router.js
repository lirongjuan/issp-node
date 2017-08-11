var app = angular.module('times', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.hand.times", {
        url : "/times",
        views : {
            "content@root.hand" : {
                templateUrl : "root/hand/times/_res/html/index.html",
                controller:"timesCtrl"
            },"menu@root.hand" : {
                templateUrl : "root/hand/times/_res/html/menu.html",
                controller:"timesMenuCtrl"
            }
        }
    }).state("root.hand.times.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.hand.times":{
                templateUrl : "root/hand/times/list/_res/html/index.html",
                controller:'timesListCtrl'
            }
        }
    }).state("root.hand.times.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.hand.times":{
                templateUrl : "root/hand/times/add/_res/html/index.html",
                controller:'timesAddCtrl'
            }
        }
    }).state("root.hand.times.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.hand.times":{
                templateUrl : "root/hand/times/edit/_res/html/index.html",
                controller:'timesEditCtrl'
            }
        }
    })
});