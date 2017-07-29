var app = angular.module('rwaitPaymentEdit', ['toastr']);
app.controller('rwaitPaymentEditCtrl', function($scope, rwaitPaymentSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    rwaitPaymentSer.listAccountCom().then(function(response){
        if(response.data.code==0){
            $scope.listAccountCom = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    //获取id对应的数据 
    rwaitPaymentSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    //点击提交
    $scope.payFun =function(){
        $scope.data.payTime = angular.element('.time').val();
        var data = $scope.data;
        data.id = companyId.id;
        rwaitPaymentSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.refundManage.rwaitPayment.list[12]');
                toastr.success('温馨提示',"此次支付成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});
   