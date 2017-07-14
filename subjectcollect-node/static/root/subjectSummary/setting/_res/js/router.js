var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.subjectSummary.setting", {
        url : "/setting",
        views : {
            "content@root.subjectSummary" : {
                templateUrl : "root/subjectSummary/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.subjectSummary" : {
                templateUrl : "root/subjectSummary/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.subjectSummary.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.subjectSummary.setting":{
                templateUrl : "root/subjectSummary/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.subjectSummary.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.subjectSummary.setting":{
                templateUrl : "root/subjectSummary/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});