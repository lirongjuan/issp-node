var app = angular.module('interface',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.projectmeasure.interface", {
        url: "/interface",
        views: {
            "content@root.projectmeasure": {
                templateUrl: "root/projectmeasure/interface/_res/html/index.html",
                controller: "interfaceCtrl"
            }
        }
    })
})