var app = angular.module('invoicesubmitEdit', ['toastr']);
app.controller('invoicesubmitEditCtrl', function($scope, invoicesubmitSer,$state,toastr,$stateParams,$filter){
    var invoicesubmitId = {id : $stateParams.id};
    //获取值
    invoicesubmitSer.invoicesubmitFind(invoicesubmitId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.invoicesubmitEditFun = function(){
        var vm = $scope;
        var data = vm.data;

        var d =  angular.element('.time').val();
        data.submitDate=d;
        //只取两位小数
        $scope.data.income = Number($scope.data.income).toFixed(2);
        $scope.data.expenditure = Number($scope.data.expenditure).toFixed(2);
        invoicesubmitSer.invoicesubmitEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.processing.invoicesubmit.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});