var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.costDetail.setting", {
        url : "/setting",
        views : {
            "content@root.costDetail" : {
                templateUrl : "root/costDetail/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.costDetail" : {
                templateUrl : "root/costDetail/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.costDetail.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.costDetail.setting":{
                templateUrl : "root/costDetail/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.costDetail.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.costDetail.setting":{
                templateUrl : "root/costDetail/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});