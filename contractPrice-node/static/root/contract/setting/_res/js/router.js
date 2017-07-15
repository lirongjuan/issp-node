var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.setting", {
        url : "/setting",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.contract.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.contract.setting":{
                templateUrl : "root/contract/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.contract.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.contract.setting":{
                templateUrl : "root/contract/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});