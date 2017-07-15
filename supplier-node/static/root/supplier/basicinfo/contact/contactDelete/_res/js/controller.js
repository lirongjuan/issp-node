var app = angular.module('contactDelete', ['toastr','ipCookie']);
app.controller('contactDeleteCtrl',function($scope,basicinfoSer,toastr,$stateParams,$state,ipCookie,$location){
    //删除
    var count =0;
    $scope.delYes = function(){
        var data = {
            id :$stateParams.suId
        };
        basicinfoSer.deleteContact(data).then(function(response){
             if(response.data.code==0){
                 count++;
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.supplier.basicinfo.contact');
                $scope.deledSubId = $stateParams.suId;
                //向父Ctrl传递事件
                $scope.$emit('deledSubId', $scope.deledSubId)
            }else {
                 toastr.error( response.data.msg, '温馨提示');
             }
        })
    }


});
