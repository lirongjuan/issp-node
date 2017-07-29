var app = angular.module('assets', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.assets", {
        url : "/assets",
        views : {  
            "content@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/assets/_res/html/index.html",
                controller:"assetsCtrl"
            },"menu@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/assets/_res/html/menu.html",
                controller:"assetsMenuCtrl"
            }
        }
    }).state("root.initialize.sort.assets.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.initialize.sort.assets":{
                templateUrl : "root/initialize/sort/assets/list/_res/html/index.html",
                controller:'assetsListCtrl'
            }
        }
    }).state("root.initialize.sort.assets.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.initialize.sort.assets":{
                templateUrl : "root/initialize/sort/assets/add/_res/html/index.html",
                controller:'assetsAddCtrl'
            }
        }
    }).state("root.initialize.sort.assets.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.initialize.sort.assets":{
                templateUrl : "root/initialize/sort/assets/edit/_res/html/index.html",
                controller:'currenyEditCtrl'
            }
        }
    })
});