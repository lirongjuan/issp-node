var app = angular.module('expenses', []);
app.controller('expensesCtrl', function ($scope,$state) {
    if ($state.current.url == '/expenses') {//默认加载列表
         $state.go('root.otherexpenses.expenses.message');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg);
    });
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
})