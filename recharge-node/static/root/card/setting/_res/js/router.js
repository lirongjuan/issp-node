var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.card.setting", {
        url : "/setting",
        views : {
            "content@root.card" : {
                templateUrl : "root/card/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.card" : {
                templateUrl : "root/card/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.card.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.card.setting":{
                templateUrl : "root/card/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.card.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.card.setting":{
                templateUrl : "root/card/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});