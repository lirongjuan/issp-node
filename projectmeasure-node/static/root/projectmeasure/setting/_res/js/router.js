var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.setting", {
        url : "/setting",
        views : {
            "content@root.projectmeasure" : {
                templateUrl : "root/projectmeasure/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"nav@root.projectmeasure" : {
                templateUrl : "root/projectmeasure/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.projectmeasure.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.projectmeasure.setting":{
                templateUrl : "root/projectmeasure/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.projectmeasure.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.projectmeasure.setting":{
                templateUrl : "root/projectmeasure/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});