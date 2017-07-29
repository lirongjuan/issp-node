var app = angular.module('taxes1',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.taxes", {
        url: "/taxes",
        views: {
            "content@root": {
                templateUrl: "root/taxes/_res/html/index.html",
                controller: "taxes1Ctrl"
            },"nav@root": {
                templateUrl: "root/taxes/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})