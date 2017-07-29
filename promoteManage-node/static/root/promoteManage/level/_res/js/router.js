var app = angular.module('level', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.promoteManage.level", {
        url : "/level",
        views : {
            "content@root.promoteManage" : {
                templateUrl : "root/promoteManage/level/_res/html/index.html",
                controller:"levelCtrl"
            },"menu@root.promoteManage" : {
                templateUrl : "root/promoteManage/level/_res/html/menu.html",
                controller:"levelMenuCtrl"
            }
        }
    }).state("root.promoteManage.level.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.promoteManage.level":{
                templateUrl : "root/promoteManage/level/list/_res/html/index.html",
                controller:'levelListCtrl'
            }
        }
    })
});