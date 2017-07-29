var app = angular.module('bidding',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.people", {
        url: "/people",
        views: {
            "content@root": {
                templateUrl: "root/people/_res/html/index.html",
                controller: "biddingCtrl"
            },"nav@root":{
                templateUrl: "root/people/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});