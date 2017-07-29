var app = angular.module('Since', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.leave.Since", {
        url : "/Since",
        views : {
            "content@root.leave" : {
                templateUrl : "root/leave/Since/_res/html/index.html",
                controller:"SinceCtrl"
            },"menu@root.leave" : {
                templateUrl : "root/leave/Since/_res/html/menu.html",
                controller:"SinceMenuCtrl"
            }
        }
    }).state("root.leave.Since.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.leave.Since":{
                templateUrl : "root/leave/Since/list/_res/html/index.html",
                controller:'sinListCtrl'
            }
        }
    }).state("root.leave.Since.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.leave.Since":{
                templateUrl : "root/leave/Since/add/_res/html/index.html",
                controller:'sinAddCtrl'
            }
        }
    }).state("root.leave.Since.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.leave.Since":{
                templateUrl : "root/leave/Since/edit/_res/html/index.html",
                controller:'sinEditCtrl'
            }
        }
    })
});