var app = angular.module('money',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.money", {
        url: "/money",
        views: {
            "content@root": {
                templateUrl: "root/money/_res/html/index.html",
                controller: "moneyCtrl"
            },"nav@root":{
                templateUrl: "root/money/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});