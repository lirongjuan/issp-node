var app = angular.module('app', ['ngVerify','ipCookie',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie,$location) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.rotation');
    }
    $scope.username = ipCookie('username');
    if($scope.username==undefined){
        $scope.username="登录用户"
    }else {
        $scope.logined=true;
    }
    $scope.login = function(){
        var absurl = $location.absUrl();
        window.location.href='http://localhost/login?url='+absurl
    };
    $scope.logout = function(){
        var abs = window.location.host;
        var hashs = $location.url().split('?')[0];
        location.href="http://localhost/user/logout?absurl="+abs+"&hash="+hashs;
    };

    //搜索功能
    $scope.isClick = true;
    $scope.searchToggle = function(){
        $scope.isClick = !$scope.isClick;
        //父 Ctrl 监听到事件，向下广播
        $scope.$broadcast('iSsearch',$scope.isClick)
    };
    //更新 isClick
    $scope.$on('isId',function(event,msg){
        $scope.isClick = msg;
    });
    //监听当前页面是否有搜索功能
    $scope.$on('isVi',function(event,msg){
        $scope.isView = msg;
    });
});
