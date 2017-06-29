var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.setting", {
        url : "/setting",
        views : {
            "content@root.businessContract" : {
                templateUrl : "root/businessContract/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.businessContract" : {
                templateUrl : "root/businessContract/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.businessContract.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.businessContract.setting":{
                templateUrl : "root/businessContract/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.businessContract.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.businessContract.setting":{
                templateUrl : "root/businessContract/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});