var app = angular.module('bonus',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.bonus", {
        url: "/bonus",
        views: {
            "content@root": {
                templateUrl: "root/bonus/_res/html/index.html",
                controller: "bonusCtrl"
            },"nav@root": {
                templateUrl: "root/bonus/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})