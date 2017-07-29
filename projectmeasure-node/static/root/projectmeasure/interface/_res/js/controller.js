var app = angular.module('interface', []);
app.controller('interfaceCtrl', function ($scope,$state) {
    if ($state.current.url == '/interface') {//默认加载列表
         $state.go('root.projectmeasure.interface.ssui');
    }
})