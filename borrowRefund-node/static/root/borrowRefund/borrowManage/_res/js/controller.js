var app = angular.module('borrowManage', []);
app.controller('borrowManageCtrl', function ($scope,$state) {
    if ($state.current.url == '/borrowManage') {//默认加载列表
         $state.go('root.borrowRefund.borrowManage.applylend');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    // 监听负责人选择id
    $scope.$on('moreId',function(event,msg){
        $scope.$broadcast('conealId',msg)
    })
})