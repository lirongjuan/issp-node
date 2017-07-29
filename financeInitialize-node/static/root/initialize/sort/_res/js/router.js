var app = angular.module('sort',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.initialize.sort", {
        url: "/sort",
        views: {
            "content@root.initialize": {
                templateUrl: "root/initialize/sort/_res/html/index.html",
                controller: "sortCtrl"
            }
        }
    })
})