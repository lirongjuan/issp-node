var app = angular.module('app', ['ngVerify','ipCookie',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie,$location,rootSer) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.projectmeasure');
    }
    $scope.username = ipCookie('username');
    if($scope.username==undefined){
        $scope.username="登录用户"
    }else {
        $scope.logined=true;
    }

    $scope.login = function(){
        var absurl = $location.absUrl();
        window.location.href='http://user.issp.bjike.com/login?url='+absurl
    };
    $scope.logout = function(){
        var abs = window.location.host;
        var hashs = $location.url().split('?')[0];
        location.href="http://user.issp.bjike.com/user/logout?absurl="+abs+"&hash="+hashs;
    }
})
