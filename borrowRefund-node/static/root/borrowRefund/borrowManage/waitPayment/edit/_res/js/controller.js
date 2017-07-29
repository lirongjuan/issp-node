var app = angular.module('waitPaymentEdit', ['toastr']);
app.controller('waitPaymenteditCtrl', function($scope, waitPaymentSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据 
    waitPaymentSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    //获取id对应的数据 
    waitPaymentSer.listAccountCom().then(function(response){//获取所有付款来源
        if(response.data.code==0){
            $scope.listAccountCom = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    //获取id对应的数据 审核人员列表
    var allData = {applyLendId:$stateParams.id}
    waitPaymentSer.allPersonnel(allData).then(function(response){
        if(response.data.code==0){
            $scope.detailList = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    //点击提交
    $scope.payFun =function(){
        $scope.data.payDate = angular.element('.time').val();
        var data = $scope.data;
        data.id = companyId.id;
        waitPaymentSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.borrowManage.waitPayment.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});
   