var app = angular.module('capital', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.card.capital", {
        url : "/capital",
        views : {
            "content@root.card" : {
                templateUrl : "root/card/capital/_res/html/index.html",
                controller:"capitalCtrl"
            },"menu@root.card" : {
                templateUrl : "root/card/capital/_res/html/menu.html",
                controller:"capitalMenuCtrl"
            }
        }
    }).state("root.card.capital.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.card.capital":{
                templateUrl : "root/card/capital/add/_res/html/index.html",
                controller:'capitalAddCtrl'
            }
        }
    }).state("root.card.capital.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.card.capital":{
                templateUrl : "root/card/capital/edit/_res/html/index.html",
                controller:'capitalEditCtrl'
            }
        }
    }).state("root.card.capital.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.card.capital":{
                templateUrl : "root/card/capital/list/_res/html/index.html",
                controller:'capitalListCtrl'
            }
        }
    })
});