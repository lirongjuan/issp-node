var app = angular.module('project', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.project", {
        url : "/project",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/project/_res/html/index.html",
                controller:"projectCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/project/_res/html/menu.html",
                controller:"projectMenuCtrl"
            }
        }
    }).state("root.contract.project.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.contract.project":{
                templateUrl : "root/contract/project/list/_res/html/index.html",
                controller:'projectListCtrl'
            }
        }
    }).state("root.contract.project.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.contract.project":{
                templateUrl : "root/contract/project/add/_res/html/index.html",
                controller:'projectAddCtrl'
            }
        }
    }).state("root.contract.project.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.contract.project":{
                templateUrl : "root/contract/project/edit/_res/html/index.html",
                controller:'projectEditCtrl'
            }
        }
    }).state("root.contract.project.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.contract.project":{
                templateUrl : "root/contract/project/upload/_res/html/index.html",
                controller:'projectUploadCtrl'
            }
        }
    }).state("root.contract.project.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.contract.project":{
                templateUrl : "root/contract/project/view/_res/html/index.html",
                controller:'projectViewCtrl'
            }
        }
    })
});