var app = angular.module('classify', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.costDetail.classify", {
        url : "/classify",
        views : {
            "content@root.costDetail" : {
                templateUrl : "root/costDetail/classify/_res/html/index.html",
                controller:"classifyCtrl"
            },"menu@root.costDetail" : {
                templateUrl : "root/costDetail/classify/_res/html/menu.html",
                controller:"classifyMenuCtrl"
            }
        }
    }).state("root.costDetail.classify.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.costDetail.classify":{
                templateUrl : "root/costDetail/classify/add/_res/html/index.html",
                controller:'classifyAddCtrl'
            }
        }
    }).state("root.costDetail.classify.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.costDetail.classify":{
                templateUrl : "root/costDetail/classify/edit/_res/html/index.html",
                controller:'classifyEditCtrl'
            }
        }
    })
});