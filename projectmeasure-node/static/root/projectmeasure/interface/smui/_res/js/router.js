var app = angular.module('smui', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.interface.smui", {
        url : "/smui",
        views : {
            "content@root.projectmeasure.interface" : {
                templateUrl : "root/projectmeasure/interface/smui/_res/html/index.html",
                controller:"smuiCtrl"
            },"menu@root.projectmeasure.interface" : {
                templateUrl : "root/projectmeasure/interface/smui/_res/html/menu.html",
                controller:"smuiMenuCtrl"
            }
        }
    }).state("root.projectmeasure.interface.smui.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectmeasure.interface.smui":{
                templateUrl : "root/projectmeasure/interface/smui/list/_res/html/index.html",
                controller:'smuiListCtrl'
            }
        }
    }).state("root.projectmeasure.interface.smui.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectmeasure.interface.smui":{
                templateUrl : "root/projectmeasure/interface/smui/add/_res/html/index.html",
                controller:'smuiAddCtrl'
            }
        }
    }).state("root.projectmeasure.interface.smui.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectmeasure.interface.smui":{
                templateUrl : "root/projectmeasure/interface/smui/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    })
});