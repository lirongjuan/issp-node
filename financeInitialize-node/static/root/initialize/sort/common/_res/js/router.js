var app = angular.module('common', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.common", {
        url : "/common",
        views : {  
            "content@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/common/_res/html/index.html",
                controller:"commonCtrl"
            },"menu@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/common/_res/html/menu.html",
                controller:"commonMenuCtrl"
            }
        }
    }).state("root.initialize.sort.common.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.initialize.sort.common":{
                templateUrl : "root/initialize/sort/common/list/_res/html/index.html",
                controller:'commonListCtrl'
            }
        }
    }).state("root.initialize.sort.common.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.initialize.sort.common":{
                templateUrl : "root/initialize/sort/common/add/_res/html/index.html",
                controller:'commonAddCtrl'
            }
        }
    }).state("root.initialize.sort.common.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.initialize.sort.common":{
                templateUrl : "root/initialize/sort/common/edit/_res/html/index.html",
                controller:'commonEditCtrl'
            }
        }
    })
});