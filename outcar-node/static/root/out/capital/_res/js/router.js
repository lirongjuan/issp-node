var app = angular.module('capital', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.out.capital", {
        url : "/capital",
        views : {
            "content@root.out" : {
                templateUrl : "root/out/capital/_res/html/index.html",
                controller:"capitalCtrl"
            },"menu@root.out" : {
                templateUrl : "root/out/capital/_res/html/menu.html",
                controller:"capitalMenuCtrl"
            }
        }
    }).state("root.out.capital.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.out.capital":{
                templateUrl : "root/out/capital/add/_res/html/index.html",
                controller:'capitalAddCtrl'
            }
        }
    }).state("root.out.capital.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.out.capital":{
                templateUrl : "root/out/capital/edit/_res/html/index.html",
                controller:'capitalEditCtrl'
            }
        }
    }).state("root.out.capital.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.out.capital":{
                templateUrl : "root/out/capital/list/_res/html/index.html",
                controller:'capitalListCtrl'
            }
        }
    }).state("root.out.capital.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.out.capital":{
                templateUrl : "root/out/capital/collect/_res/html/index.html",
                controller:'capitalCollectCtrl'
            }
        }
    })
});