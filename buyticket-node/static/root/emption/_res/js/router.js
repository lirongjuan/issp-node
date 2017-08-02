var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.emption", {
        url: "/emption",
        views: {
            "content@root": {
                templateUrl: "root/emption/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/emption/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})