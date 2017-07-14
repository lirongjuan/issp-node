var app = angular.module('info', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.statement.info", {
        url : "/info",
        views : {
            "content@root.statement" : {
                templateUrl : "root/statement/info/_res/html/index.html",
                controller:"infoCtrl"
            },"menu@root.statement" : {
                templateUrl : "root/statement/info/_res/html/menu.html",
                controller:"infoMenuCtrl"
            }
        }
    }).state("root.statement.info.list[12]", {
        url : "/list[12]?id=&name=&page=",
        views : {
            "content@root.statement.info" : {
                templateUrl : "root/statement/info/list/_res/html/index.html",
                controller:"infoListCtrl"
            }
        }
    }).state("root.statement.info.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.statement.info" : {
                templateUrl : "root/statement/info/add/_res/html/index.html",
                controller:"infoAddCtrl"
            }
        }
    }).state("root.statement.info.edit[12]", {
        url : "/edit[12]?id=&page=",
        views : {
            "content@root.statement.info" : {
                templateUrl : "root/statement/info/edit/_res/html/index.html",
                controller:"infoEditCtrl"
            }
        }
    })
});