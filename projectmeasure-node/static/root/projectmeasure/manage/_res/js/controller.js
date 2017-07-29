var app = angular.module('manage', []);
app.controller('manageCtrl', function ($scope,$state) {
    if ($state.current.url == '/manage') {//默认加载列表
         $state.go('root.projectmeasure.manage.basicinfo');
    }
})