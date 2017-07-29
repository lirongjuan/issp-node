var app = angular.module('taxesmanageEdit', ['toastr']);
app.controller('taxesmanageEditCtrl', function($scope, taxesmanageSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    taxesmanageSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        $scope.data.month = angular.element('.month').val();//月份
        $scope.data.paymentDate = angular.element('.payTime').val();//付款日期
        taxesmanageSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.taxes.taxes.taxesmanage.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
});
   