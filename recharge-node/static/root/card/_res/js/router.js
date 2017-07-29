var app = angular.module('card',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.card", {
        url: "/card",
        views: {
            "content@root": {
                templateUrl: "root/card/_res/html/index.html",
                controller: "cardCtrl"
            },"nav@root": {
                templateUrl: "root/card/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})