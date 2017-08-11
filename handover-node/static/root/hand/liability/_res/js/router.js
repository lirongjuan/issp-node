var app = angular.module('liability', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.hand.liability", {
        url : "/liability",
        views : {
            "content@root.hand" : {
                templateUrl : "root/hand/liability/_res/html/index.html",
                controller:"liabilityCtrl"
            },"menu@root.hand" : {
                templateUrl : "root/hand/liability/_res/html/menu.html",
                controller:"liabilityMenuCtrl"
            }
        }
    }).state("root.hand.liability.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.hand.liability":{
                templateUrl : "root/hand/liability/list/_res/html/index.html",
                controller:'liabilityListCtrl'
            }
        }
    }).state("root.hand.liability.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.hand.liability":{
                templateUrl : "root/hand/liability/add/_res/html/index.html",
                controller:'liabilityAddCtrl'
            }
        }
    }).state("root.hand.liability.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.hand.liability":{
                templateUrl : "root/hand/liability/edit/_res/html/index.html",
                controller:'liabilityEditCtrl'
            }
        }
    })
});