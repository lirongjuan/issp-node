var app = angular.module('schedulejob',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.schedulejob", {
        url: "/schedulejob",
        views: {
            "content@root": {
                templateUrl: "root/schedulejob/_res/html/index.html",
                controller: "schedulejobCtrl"
            },"nav@root": {
                templateUrl: "root/schedulejob/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})