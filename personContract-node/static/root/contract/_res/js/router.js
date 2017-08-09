var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.contract", {
        url: "/contract",
        views: {
            "content@root": {
                templateUrl: "root/contract/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/contract/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})