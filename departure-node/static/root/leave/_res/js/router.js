var app = angular.module('bidding',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.leave", {
        url: "/leave",
        views: {
            "content@root": {
                templateUrl: "root/leave/_res/html/index.html",
                controller: "biddingCtrl"
            },"nav@root":{
                templateUrl: "root/leave/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});