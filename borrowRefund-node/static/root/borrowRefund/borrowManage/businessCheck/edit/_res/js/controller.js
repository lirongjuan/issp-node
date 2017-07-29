var app = angular.module('businessCheckEdit', ['toastr']);
app.controller('businessCheckeditCtrl', function($scope, businessCheckSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据 
    businessCheckSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //点击提交
    $scope.EditFun =function(){
        $scope.data.ticketDate = angular.element('.time').val();
        var data = $scope.data;
        data.id = companyId.id;
        businessCheckSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.borrowManage.businessCheck.list[12]');
                toastr.success("此次还款成功",'温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
});
   