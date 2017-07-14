var app = angular.module('course',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.subjectSummary", {
        url: "/subjectSummary",
        views: {
            "content@root": {
                templateUrl: "root/subjectSummary/_res/html/index.html",
                controller: "subjectCtrl"
            },"nav@root":{
                templateUrl: "root/subjectSummary/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});