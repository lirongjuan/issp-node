var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.stock", {
        url: "/stock",
        views: {
            "content@root": {
                templateUrl: "root/stock/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/stock/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})