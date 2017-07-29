var app = angular.module('check', []);
app.controller('checkCtrl', function ($scope,$state) {
    if ($state.current.url == '/check') {//默认加载列表
         $state.go('root.incomeAccount.check.checkindex');
    }
});