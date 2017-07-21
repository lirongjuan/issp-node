var app = angular.module('repertory', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.stock.repertory", {
        url : "/repertory",
        views : {
            "content@root.stock" : {
                templateUrl : "root/stock/repertory/_res/html/index.html",
                controller:"repertoryCtrl"
            },"menu@root.stock" : {
                templateUrl : "root/stock/repertory/_res/html/menu.html",
                controller:"repertoryMenuCtrl"
            }
        }
    }).state("root.stock.repertory.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.stock.repertory":{
                templateUrl : "root/stock/repertory/list/_res/html/index.html",
                controller:'repertoryListCtrl'
            }
        }
    }).state("root.stock.repertory.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.stock.repertory":{
                templateUrl : "root/stock/repertory/add/_res/html/index.html",
                controller:'repertoryAddCtrl'
            }
        }
    }).state("root.stock.repertory.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.stock.repertory":{
                templateUrl : "root/stock/repertory/edit/_res/html/index.html",
                controller:'repertoryEditCtrl'
            }
        }
    })
});