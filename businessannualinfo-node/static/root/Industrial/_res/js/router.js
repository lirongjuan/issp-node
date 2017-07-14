var app = angular.module('Indust',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.Industrial", {
        url: "/Industrial",
        views: {
            "content@root": {
                templateUrl: "root/Industrial/_res/html/index.html",
                controller: "IndustCtrl"
            },"nav@root":{
                templateUrl: "root/Industrial/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});