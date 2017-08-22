var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dealt.setting", {
        url : "/setting",
        views : {
            "content@root.dealt" : {
                templateUrl : "root/dealt/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.dealt" : {
                templateUrl : "root/dealt/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.dealt.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.dealt.setting":{
                templateUrl : "root/dealt/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.dealt.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.dealt.setting":{
                templateUrl : "root/dealt/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});