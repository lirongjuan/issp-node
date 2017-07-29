var app = angular.module('settingMore', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.settingMore", {
        url : "/settingMore",
        views : {
            "content@root.initialize" : {
                templateUrl : "root/initialize/settingMore/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.initialize" : {
                templateUrl : "root/initialize/settingMore/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.initialize.settingMore.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.initialize.settingMore":{
                templateUrl : "root/initialize/settingMore/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.initialize.settingMore.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.initialize.settingMore":{
                templateUrl : "root/initialize/settingMore/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});