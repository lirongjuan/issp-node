var app = angular.module('profitfLoss', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.profitfLoss", {
        url : "/profitfLoss",
        views : {  
            "content@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/profitfLoss/_res/html/index.html",
                controller:"profitfLossCtrl"
            },"menu@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/profitfLoss/_res/html/menu.html",
                controller:"profitfLossMenuCtrl"
            }
        }
    }).state("root.initialize.sort.profitfLoss.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.initialize.sort.profitfLoss":{
                templateUrl : "root/initialize/sort/profitfLoss/list/_res/html/index.html",
                controller:'profitfLossListCtrl'
            }
        }
    }).state("root.initialize.sort.profitfLoss.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.initialize.sort.profitfLoss":{
                templateUrl : "root/initialize/sort/profitfLoss/add/_res/html/index.html",
                controller:'profitfLossAddCtrl'
            }
        }
    }).state("root.initialize.sort.profitfLoss.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.initialize.sort.profitfLoss":{
                templateUrl : "root/initialize/sort/profitfLoss/edit/_res/html/index.html",
                controller:'profitfLossEditCtrl'
            }
        }
    })
});