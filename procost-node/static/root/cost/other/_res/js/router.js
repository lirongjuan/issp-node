var app = angular.module('other', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.cost.other", {
        url : "/other",
        views : {
            "content@root.cost" : {
                templateUrl : "root/cost/other/_res/html/index.html",
                controller:"otherCtrl"
            },"menu@root.cost" : {
                templateUrl : "root/cost/other/_res/html/menu.html",
                controller:"otherMenuCtrl"
            }
        }
    }).state("root.cost.other.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.cost.other":{
                templateUrl : "root/cost/other/add/_res/html/index.html",
                controller:'otherAddCtrl'
            }
        }
    }).state("root.cost.other.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.cost.other":{
                templateUrl : "root/cost/other/edit/_res/html/index.html",
                controller:'otherEditCtrl'
            }
        }
    }).state("root.cost.other.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.cost.other":{
                templateUrl : "root/cost/other/list/_res/html/index.html",
                controller:'otherListCtrl'
            }
        }
    })
});