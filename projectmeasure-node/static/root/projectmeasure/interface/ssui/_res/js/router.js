var app = angular.module('ssui', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.interface.ssui", {
        url : "/ssui",
        views : {
            "content@root.projectmeasure.interface" : {
                templateUrl : "root/projectmeasure/interface/ssui/_res/html/index.html",
                controller:"ssuiCtrl"
            },"menu@root.projectmeasure.interface" : {
                templateUrl : "root/projectmeasure/interface/ssui/_res/html/menu.html",
                controller:"ssuiMenuCtrl"
            }
        }
    }).state("root.projectmeasure.interface.ssui.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectmeasure.interface.ssui":{
                templateUrl : "root/projectmeasure/interface/ssui/list/_res/html/index.html",
                controller:'ssuiListCtrl'
            }
        }
    }).state("root.projectmeasure.interface.ssui.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectmeasure.interface.ssui":{
                templateUrl : "root/projectmeasure/interface/ssui/add/_res/html/index.html",
                controller:'ssuiAddCtrl'
            }
        }
    }).state("root.projectmeasure.interface.ssui.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectmeasure.interface.ssui":{
                templateUrl : "root/projectmeasure/interface/ssui/edit/_res/html/index.html",
                controller:'ssuiEditCtrl'
            }
        }
    })
});