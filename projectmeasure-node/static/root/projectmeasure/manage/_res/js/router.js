var app = angular.module('manage',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.projectmeasure.manage", {
        url: "/manage",
        views: {
            "content@root.projectmeasure": {
                templateUrl: "root/projectmeasure/manage/_res/html/index.html",
                controller: "manageCtrl"
            }
        }
    })
});