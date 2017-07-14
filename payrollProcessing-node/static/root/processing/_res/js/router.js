var app = angular.module('processedModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.processing", {
        url: "/processing",
        views: {
            "content@root": {
                templateUrl: "root/processing/_res/html/index.html",
                controller: "processedCtrl"
            },"nav@root":{
                templateUrl: "root/processing/_res/html/nav.html",
                controller:"navsCtrl"
            }
        }
    })
});