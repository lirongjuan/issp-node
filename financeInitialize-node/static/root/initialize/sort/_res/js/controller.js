var app = angular.module('sort', []);
app.controller('sortCtrl', function ($scope,$state) {
    if ($state.current.url == '/sort') {//默认加载列表
         $state.go('root.initialize.sort.assets');
    }
})