var app = angular.module('taxes',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.taxes.taxes", {
        url: "/taxes",
        views: {
            "content@root.taxes": {
                templateUrl: "root/taxes/taxes/_res/html/index.html",
                controller: "taxesCtrl"
            }
        }
    })
})