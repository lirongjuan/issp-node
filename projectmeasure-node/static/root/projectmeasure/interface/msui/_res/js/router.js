var app = angular.module('msui', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.interface.msui", {
        url : "/msui",
        views : {// projectmeasure  
            "content@root.projectmeasure.interface" : {
                templateUrl : "root/projectmeasure/interface/msui/_res/html/index.html",
                controller:"msuiCtrl"
            },"menu@root.projectmeasure.interface" : {
                templateUrl : "root/projectmeasure/interface/msui/_res/html/menu.html",
                controller:"msuiMenuCtrl"
            }
        }
    }).state("root.projectmeasure.interface.msui.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectmeasure.interface.msui":{
                templateUrl : "root/projectmeasure/interface/msui/list/_res/html/index.html",
                controller:'msuiListCtrl'
            }
        }
    }).state("root.projectmeasure.interface.msui.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectmeasure.interface.msui":{
                templateUrl : "root/projectmeasure/interface/msui/add/_res/html/index.html",
                controller:'msuiAddCtrl'
            }
        }
    }).state("root.projectmeasure.interface.msui.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectmeasure.interface.msui":{
                templateUrl : "root/projectmeasure/interface/msui/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    })
});