var app = angular.module('setting', []);
app.controller('settingCtrl', function ($scope,$state) {
    if ($state.current.url == '/setting') {//默认加载列表
         $state.go('root.initialize.setting.currency');
    }
})