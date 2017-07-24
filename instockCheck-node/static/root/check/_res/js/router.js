var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.check", {
        url: "/check",
        views: {
            "content@root": {
                templateUrl: "root/check/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/check/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})