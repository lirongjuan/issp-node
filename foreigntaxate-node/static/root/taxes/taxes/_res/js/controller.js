var app = angular.module('taxes', []);
app.controller('taxesCtrl', function ($scope,$state) {
    if ($state.current.url == '/taxes') {//默认加载列表
         $state.go('root.taxes.taxes.taxesmanage');
    }
})