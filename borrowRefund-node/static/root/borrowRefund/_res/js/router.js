var app = angular.module('borrowRefund',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.borrowRefund", {
        url: "/borrowRefund",
        views: {
            "content@root": {
                templateUrl: "root/borrowRefund/_res/html/index.html",
                controller: "borrowRefundCtrl"
            },"nav@root": {
                templateUrl: "root/borrowRefund/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})