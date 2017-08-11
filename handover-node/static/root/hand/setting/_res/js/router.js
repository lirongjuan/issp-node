var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.hand.setting", {
        url : "/setting",
        views : {
            "content@root.hand" : {
                templateUrl : "root/hand/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.hand" : {
                templateUrl : "root/hand/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.hand.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.hand.setting":{
                templateUrl : "root/hand/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.hand.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.hand.setting":{
                templateUrl : "root/hand/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});