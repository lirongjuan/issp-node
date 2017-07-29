var app = angular.module('refundManage', []);
app.controller('refundManageCtrl', function ($scope,$state) {
    if ($state.current.url == '/refundManage') {//默认加载列表
         $state.go('root.borrowRefund.refundManage.applyRecord');
    }
    // 监听负责人选择id
    $scope.$on('moreId',function(event,msg){
        $scope.$broadcast('conealId',msg)
    })
})