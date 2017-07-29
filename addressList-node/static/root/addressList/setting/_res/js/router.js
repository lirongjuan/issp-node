var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.addressList.setting", {
        url : "/setting",
        views : {
            "content@root.addressList" : {
                templateUrl : "root/addressList/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.addressList" : {
                templateUrl : "root/addressList/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.addressList.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.addressList.setting":{
                templateUrl : "root/addressList/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.addressList.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.addressList.setting":{
                templateUrl : "root/addressList/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});