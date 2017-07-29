var app = angular.module('labour', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.labour", {
        url : "/labour",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/labour/_res/html/index.html",
                controller:"labourCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/labour/_res/html/menu.html",
                controller:"labourMenuCtrl"
            }
        }
    }).state("root.file.labour.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.labour":{
                templateUrl : "root/file/labour/list/_res/html/index.html",
                controller:'labourListCtrl'
            }
        }
    }).state("root.file.labour.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.labour":{
                templateUrl : "root/file/labour/add/_res/html/index.html",
                controller:'labourAddCtrl'
            }
        }
    }).state("root.file.labour.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.labour":{
                templateUrl : "root/file/labour/edit/_res/html/index.html",
                controller:'labourEditCtrl'
            }
        }
    })
});