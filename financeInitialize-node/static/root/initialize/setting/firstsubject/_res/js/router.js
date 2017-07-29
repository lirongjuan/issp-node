var app = angular.module('firstsubject', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.setting.firstsubject", {
        url : "/firstsubject",
        views : {  
            "content@root.initialize.setting" : {
                templateUrl : "root/initialize/setting/firstsubject/_res/html/index.html",
                controller:"firstsubjectCtrl"
            },"menu@root.initialize.setting" : {
                templateUrl : "root/initialize/setting/firstsubject/_res/html/menu.html",
                controller:"firstsubjectMenuCtrl"
            }
        }
    }).state("root.initialize.setting.firstsubject.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.initialize.setting.firstsubject":{
                templateUrl : "root/initialize/setting/firstsubject/list/_res/html/index.html",
                controller:'firstsubjectListCtrl'
            }
        }
    }).state("root.initialize.setting.firstsubject.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.initialize.setting.firstsubject":{
                templateUrl : "root/initialize/setting/firstsubject/add/_res/html/index.html",
                controller:'firstsubjectAddCtrl'
            }
        }
    }).state("root.initialize.setting.firstsubject.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.initialize.setting.firstsubject":{
                templateUrl : "root/initialize/setting/firstsubject/edit/_res/html/index.html",
                controller:'EditCtrl'
            }
        }
    }).state("root.initialize.setting.firstsubject.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.initialize.setting.firstsubject":{
                templateUrl : "root/initialize/setting/firstsubject/export/_res/html/index.html",
                controller:'exportCtrl'
            }
        }
    }).state("root.initialize.setting.firstsubject.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.initialize.setting.firstsubject":{
                templateUrl : "root/initialize/setting/firstsubject/import/_res/html/index.html",
                controller:'importCtrl'
            }
        }
    })
});