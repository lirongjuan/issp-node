var app = angular.module('payed', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.processing.payed", {
        url : "/payed",
        views : {
            "content@root.processing" : {
                templateUrl : "root/processing/payed/_res/html/index.html",
                controller:"payedCtrl"
            },"menu@root.processing" : {
                templateUrl : "root/processing/payed/_res/html/menu.html",
                controller:"payedMenuCtrl"
            }
        }
    }).state("root.processing.payed.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.processing.payed":{
                templateUrl : "root/processing/payed/list/_res/html/index.html",
                controller:'payedListCtrl'
            }
        }
    })
});