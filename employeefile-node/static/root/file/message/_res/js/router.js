var app = angular.module('message', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.message", {
        url : "/message",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/message/_res/html/index.html",
                controller:"messageCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/message/_res/html/menu.html",
                controller:"messageMenuCtrl"
            }
        }
    }).state("root.file.message.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.message":{
                templateUrl : "root/file/message/list/_res/html/index.html",
                controller:'messageListCtrl'
            }
        }
    }).state("root.file.message.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.message":{
                templateUrl : "root/file/message/add/_res/html/index.html",
                controller:'messageAddCtrl'
            }
        }
    }).state("root.file.message.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.message":{
                templateUrl : "root/file/message/edit/_res/html/index.html",
                controller:'messageEditCtrl'
            }
        }
    })
});