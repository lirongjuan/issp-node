var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.flow.setting", {
        url : "/setting",
        views : {
            "content@root.flow" : {
                templateUrl : "root/flow/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.flow" : {
                templateUrl : "root/flow/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.flow.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.flow.setting":{
                templateUrl : "root/flow/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.flow.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.flow.setting":{
                templateUrl : "root/flow/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});