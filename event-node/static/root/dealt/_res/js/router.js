var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.dealt", {
        url: "/dealt",
        views: {
            "content@root": {
                templateUrl: "root/dealt/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/dealt/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})