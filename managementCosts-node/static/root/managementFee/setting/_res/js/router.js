var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.managementFee.setting", {
        url : "/setting",
        views : {
            "content@root.managementFee" : {
                templateUrl : "root/managementFee/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.managementFee" : {
                templateUrl : "root/managementFee/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.managementFee.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.managementFee.setting":{
                templateUrl : "root/managementFee/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.managementFee.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.managementFee.setting":{
                templateUrl : "root/managementFee/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});