var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.ready", {
        url: "/ready",
        views: {
            "content@root": {
                templateUrl: "root/ready/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/ready/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})