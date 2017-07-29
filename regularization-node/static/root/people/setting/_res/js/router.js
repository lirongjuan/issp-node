var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.people.setting", {
        url : "/setting",
        views : {
            "content@root.people" : {
                templateUrl : "root/people/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.people" : {
                templateUrl : "root/people/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.people.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.people.setting":{
                templateUrl : "root/people/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.people.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.people.setting":{
                templateUrl : "root/people/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});