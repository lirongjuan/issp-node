var app = angular.module('setting',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.initialize.setting", {
        url: "/setting",
        views: {
            "content@root.initialize": {
                templateUrl: "root/initialize/setting/_res/html/index.html",
                controller: "settingCtrl"
            }
        }
    })
})