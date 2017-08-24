var app = angular.module('recharge', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.card.recharge", {
        url : "/recharge",
        views : {
            "content@root.card" : {
                templateUrl : "root/card/recharge/_res/html/index.html",
                controller:"rechargeCtrl"
            },"menu@root.card" : {
                templateUrl : "root/card/recharge/_res/html/menu.html",
                controller:"rechargeMenuCtrl"
            }
        }
    }).state("root.card.recharge.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.card.recharge":{
                templateUrl : "root/card/recharge/list/_res/html/index.html",
                controller:'rechargeListCtrl'
            }
        }
    }).state("root.card.recharge.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.card.recharge":{
                templateUrl : "root/card/recharge/add/_res/html/index.html",
                controller:'rechargeAddCtrl'
            }
        }
    }).state("root.card.recharge.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.card.recharge":{
                templateUrl : "root/card/recharge/edit/_res/html/index.html",
                controller:'rechargeEditCtrl'
            }
        }
    }).state("root.card.recharge.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.card.recharge":{
                templateUrl : "root/card/recharge/upload/_res/html/index.html",
                controller:'rechargeUploadCtrl'
            }
        }
    }).state("root.card.recharge.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.card.recharge":{
                templateUrl : "root/card/recharge/view/_res/html/index.html",
                controller:'rechargeViewCtrl'
            }
        }
    }).state("root.card.recharge.eventCollect[12]",{
        url:"/eventCollect[12]",
        views:{
            "content@root.card.recharge":{
                templateUrl : "root/card/recharge/eventCollect/_res/html/index.html",
                controller:'rechargeCollectCtrl'
            }
        }
    })
});