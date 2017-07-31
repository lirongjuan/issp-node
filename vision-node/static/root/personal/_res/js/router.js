var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.personal", {
        url: "/personal",
        views: {
            "content@root": {
                templateUrl: "root/personal/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/personal/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})