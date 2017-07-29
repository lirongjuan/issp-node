var app = angular.module('handover',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.handover", {
        url: "/handover",
        views: {
            "content@root": {
                templateUrl: "root/handover/_res/html/index.html",
                controller: "handoverCtrl"
            },"nav@root": {
                templateUrl: "root/handover/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})