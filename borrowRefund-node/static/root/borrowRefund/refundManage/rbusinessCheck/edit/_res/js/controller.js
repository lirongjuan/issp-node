var app = angular.module('rbusinessCheckEdit', ['toastr']);
app.controller('rbusinessCheckeditCtrl', function($scope, rbusinessCheckSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据 
    rbusinessCheckSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //点击提交
    $scope.EditFun =function(){
        $scope.data.receiveTicketTime = angular.element('.time').val();
        var data = $scope.data;
        data.id = companyId.id;
        rbusinessCheckSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.refundManage.rbusinessCheck.list[12]');
                toastr.success("此次编辑成功",'温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
});
   