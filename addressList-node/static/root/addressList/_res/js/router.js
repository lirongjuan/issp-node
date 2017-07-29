var app = angular.module('contractModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.addressList", {
        url: "/addressList",
        views: {
            "content@root": {
                templateUrl: "root/addressList/_res/html/index.html",
                controller: "busContractCtrl"
            },"nav@root":{
                templateUrl: "root/addressList/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});