var app = angular.module('collar', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.card.collar", {
        url : "/collar",
        views : {
            "content@root.card" : {
                templateUrl : "root/card/collar/_res/html/index.html",
                controller:"collarCtrl"
            },"menu@root.card" : {
                templateUrl : "root/card/collar/_res/html/menu.html",
                controller:"collarMenuCtrl"
            }
        }
    }).state("root.card.collar.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.card.collar":{
                templateUrl : "root/card/collar/list/_res/html/index.html",
                controller:'collarListCtrl'
            }
        }
    }).state("root.card.collar.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.card.collar":{
                templateUrl : "root/card/collar/add/_res/html/index.html",
                controller:'collarAddCtrl'
            }
        }
    }).state("root.card.collar.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.card.collar":{
                templateUrl : "root/card/collar/edit/_res/html/index.html",
                controller:'collarEditCtrl'
            }
        }
    }).state("root.card.collar.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.card.collar":{
                templateUrl : "root/card/collar/audit/_res/html/index.html",
                controller:'collarAuditCtrl'
            }
        }
    })
});