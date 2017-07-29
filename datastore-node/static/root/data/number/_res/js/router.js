var app = angular.module('number', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.data.number", {
        url : "/number",
        views : {
            "content@root.data" : {
                templateUrl : "root/data/number/_res/html/index.html",
                controller:"numberCtrl"
            },"menu@root.data" : {
                templateUrl : "root/data/number/_res/html/menu.html",
                controller:"numberMenuCtrl"
            }
        }
    }).state("root.data.number.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.data.number":{
                templateUrl : "root/data/number/add/_res/html/index.html",
                controller:'numberAddCtrl'
            }
        }
    }).state("root.data.number.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.data.number":{
                templateUrl : "root/data/number/edit/_res/html/index.html",
                controller:'numberEditCtrl'
            }
        }
    }).state("root.data.number.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.data.number":{
                templateUrl : "root/data/number/list/_res/html/index.html",
                controller:'numberListCtrl'
            }
        }
    }).state("root.data.number.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.data.number":{
                templateUrl : "root/data/number/upload/_res/html/index.html",
                controller:'numberUploadCtrl'
            }
        }
    }).state("root.data.number.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.data.number":{
                templateUrl : "root/data/number/view/_res/html/index.html",
                controller:'numberViewCtrl'
            }
        }
    })
});