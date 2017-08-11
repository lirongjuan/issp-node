var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.hand", {
        url: "/hand",
        views: {
            "content@root": {
                templateUrl: "root/hand/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/hand/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})