var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.cost", {
        url: "/cost",
        views: {
            "content@root": {
                templateUrl: "root/cost/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/cost/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})