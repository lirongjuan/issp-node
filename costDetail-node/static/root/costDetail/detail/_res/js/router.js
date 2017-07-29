var app = angular.module('detail', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.costDetail.detail", {
        url : "/detail",
        views : {
            "content@root.costDetail" : {
                templateUrl : "root/costDetail/detail/_res/html/index.html",
                controller:"detailCtrl"
            },"menu@root.costDetail" : {
                templateUrl : "root/costDetail/detail/_res/html/menu.html",
                controller:"detailMenuCtrl"
            }
        }
    }).state("root.costDetail.detail.list[12]",{
        url:"/list[12]?id=&name=&page=&costTime=&department=",
        views:{
            "content@root.costDetail.detail":{
                templateUrl : "root/costDetail/detail/list/_res/html/index.html",
                controller:'detailListCtrl'
            }
        }
    }).state("root.costDetail.detail.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.costDetail.detail":{
                templateUrl : "root/costDetail/detail/add/_res/html/index.html",
                controller:'detailAddCtrl'
            }
        }
    }).state("root.costDetail.detail.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.costDetail.detail":{
                templateUrl : "root/costDetail/detail/edit/_res/html/index.html",
                controller:'detailEditCtrl'
            }
        }
    }).state("root.costDetail.detail.monthCollect[12]",{
        url:"/monthCollect[12]",
        views:{
            "content@root.costDetail.detail":{
                templateUrl : "root/costDetail/detail/monthCollect/_res/html/index.html",
                controller:'detailmonthCollectCtrl'
            }
        }
    }).state("root.costDetail.detail.yearCollect[12]",{
        url:"/yearCollect[12]",
        views:{
            "content@root.costDetail.detail":{
                templateUrl : "root/costDetail/detail/yearCollect/_res/html/index.html",
                controller:'detailyearCollectCtrl'
            }
        }
    })
});