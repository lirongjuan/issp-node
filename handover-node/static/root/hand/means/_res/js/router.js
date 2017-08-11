var app = angular.module('means', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.hand.means", {
        url : "/means",
        views : {
            "content@root.hand" : {
                templateUrl : "root/hand/means/_res/html/index.html",
                controller:"meansCtrl"
            },"menu@root.hand" : {
                templateUrl : "root/hand/means/_res/html/menu.html",
                controller:"meansMenuCtrl"
            }
        }
    }).state("root.hand.means.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.hand.means":{
                templateUrl : "root/hand/means/list/_res/html/index.html",
                controller:'meansListCtrl'
            }
        }
    }).state("root.hand.means.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.hand.means":{
                templateUrl : "root/hand/means/add/_res/html/index.html",
                controller:'meansAddCtrl'
            }
        }
    }).state("root.hand.means.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.hand.means":{
                templateUrl : "root/hand/means/edit/_res/html/index.html",
                controller:'meansEditCtrl'
            }
        }
    }).state("root.hand.means.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.hand.means":{
                templateUrl : "root/hand/means/upload/_res/html/index.html",
                controller:'meansUploadCtrl'
            }
        }
    }).state("root.hand.means.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.hand.means":{
                templateUrl : "root/hand/means/view/_res/html/index.html",
                controller:'meansViewCtrl'
            }
        }
    })
});