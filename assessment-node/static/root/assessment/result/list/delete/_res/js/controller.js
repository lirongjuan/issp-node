var app = angular.module('resultDelete', ['toastr']);
app.controller('resultDeleteCtrl',function($scope,resultSer,toastr,$stateParams,$state,ipCookie,$location){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        resultSer.deleteResult(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.assessment.result.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId)
            }else if (response.data.code == 403||response.data.code == 401) {
                 toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                 var absurl = $location.absUrl();
                 ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                 setTimeout(function(){
                     window.location.href='http://localhost/login'
                 },3000)
             }
        })
    }


});