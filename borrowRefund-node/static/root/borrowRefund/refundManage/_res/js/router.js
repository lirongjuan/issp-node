var app = angular.module('refundManage',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.borrowRefund.refundManage", {
        url: "/refundManage",
        views: {
            "content@root.borrowRefund": {
                templateUrl: "root/borrowRefund/refundManage/_res/html/index.html",
                controller: "refundManageCtrl"
            }
        }
    })
})