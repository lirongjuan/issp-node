var app = angular.module('waitconfirm', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.processing.waitconfirm", {
        url : "/waitconfirm",
        views : {
            "content@root.processing" : {
                templateUrl : "root/processing/waitconfirm/_res/html/index.html",
                controller:"waitconfirmCtrl"
            },"menu@root.processing" : {
                templateUrl : "root/processing/waitconfirm/_res/html/menu.html",
                controller:"waitconfirmMenuCtrl"
            }
        }
    }).state("root.processing.waitconfirm.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.processing.waitconfirm":{
                templateUrl : "root/processing/waitconfirm/list/_res/html/index.html",
                controller:'waitconfirmListCtrl'
            }
        }
    })
});