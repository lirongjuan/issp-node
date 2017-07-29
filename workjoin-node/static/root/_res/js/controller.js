var app = angular.module('app', ['ngVerify','ipCookie',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,$location,ipCookie,rootSer) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.handover');
    }
    $scope.username = ipCookie('username');
    if($scope.username==undefined){
        $scope.username="登录用户"
    }else {
        $scope.logined=true;
    }

    $scope.login = function(){
        var absurl = $location.absUrl();
        ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
        location.href="http://localhost/login";//部署到线上时要改为登录域名
    };
    $scope.logout = function(){

        var absurl = {absurl:$location.absUrl()};
        rootSer.userLogout(absurl).then(function(response){
            if(response.data.code==0){
                ipCookie.remove("username");
                location.href="http://localhost/user/logout"
            }
        })
    }
});
