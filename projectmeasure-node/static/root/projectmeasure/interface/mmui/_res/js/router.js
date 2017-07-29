var app = angular.module('mmui', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.interface.mmui", {
        url : "/mmui",
        views : {// projectmeasure  
            "content@root.projectmeasure.interface" : {
                templateUrl : "root/projectmeasure/interface/mmui/_res/html/index.html",
                controller:"mmuiCtrl"
            },"menu@root.projectmeasure.interface" : {
                templateUrl : "root/projectmeasure/interface/mmui/_res/html/menu.html",
                controller:"mmuiMenuCtrl"
            }
        }
    }).state("root.projectmeasure.interface.mmui.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectmeasure.interface.mmui":{
                templateUrl : "root/projectmeasure/interface/mmui/list/_res/html/index.html",
                controller:'mmuiListCtrl'
            }
        }
    }).state("root.projectmeasure.interface.mmui.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectmeasure.interface.mmui":{
                templateUrl : "root/projectmeasure/interface/mmui/add/_res/html/index.html",
                controller:'mmuiAddCtrl'
            }
        }
    }).state("root.projectmeasure.interface.mmui.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectmeasure.interface.mmui":{
                templateUrl : "root/projectmeasure/interface/mmui/edit/_res/html/index.html",
                controller:'mmuiEditCtrl'
            }
        }
    })
});