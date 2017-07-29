var app = angular.module('cost',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.cost", {
        url: "/cost",
        views: {
            "content@root": {
                templateUrl: "root/cost/_res/html/index.html",
                controller: "costCtrl"
            },"nav@root": {
                templateUrl: "root/cost/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})