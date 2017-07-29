var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.promoteManage.setting", {
        url : "/setting",
        views : {
            "content@root.promoteManage" : {
                templateUrl : "root/promoteManage/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.promoteManage" : {
                templateUrl : "root/promoteManage/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.promoteManage.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.promoteManage.setting":{
                templateUrl : "root/promoteManage/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.promoteManage.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.promoteManage.setting":{
                templateUrl : "root/promoteManage/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});