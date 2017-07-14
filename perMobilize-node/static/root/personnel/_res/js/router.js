var app = angular.module('personnel',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.personnel", {
        url: "/personnel",
        views: {
            "content@root": {
                templateUrl: "root/personnel/_res/html/index.html",
                controller: "personnelCtrl"
            },"nav@root":{
                templateUrl: "root/personnel/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});