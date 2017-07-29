var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.cost.setting", {
        url : "/setting",
        views : {
            "content@root.cost" : {
                templateUrl : "root/cost/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.cost" : {
                templateUrl : "root/cost/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.cost.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.cost.setting":{
                templateUrl : "root/cost/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.cost.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.cost.setting":{
                templateUrl : "root/cost/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});