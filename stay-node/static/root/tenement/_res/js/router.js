var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.tenement", {
        url: "/tenement",
        views: {
            "content@root": {
                templateUrl: "root/tenement/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/tenement/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})