var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.shift", {
        url: "/shift",
        views: {
            "content@root": {
                templateUrl: "root/shift/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/shift/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})