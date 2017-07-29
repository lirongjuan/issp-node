var app = angular.module('borrowManage',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.borrowRefund.borrowManage", {
        url: "/borrowManage",
        views: {
            "content@root.borrowRefund": {
                templateUrl: "root/borrowRefund/borrowManage/_res/html/index.html",
                controller: "borrowManageCtrl"
            }
        }
    })
})