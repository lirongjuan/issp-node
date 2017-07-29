var app = angular.module('finoddInforAdd', ['toastr']);
app.controller('addCtrl', function($scope, finoddInforSer,$state,toastr){

    $scope.addFun = function(){
        var data = $scope.data;
        finoddInforSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.refundManage.finoddInfor.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});



