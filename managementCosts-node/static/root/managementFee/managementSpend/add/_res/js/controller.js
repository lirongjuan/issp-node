var app = angular.module('spendAdd', ['toastr']);
app.controller('spendAddCtrl', function($scope, spendSer,$state,toastr){

    spendSer.getYear().then(function(response){
        if(response.data.code == 0){
            $scope.spendYear = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.spendAddFun = function(){
        var vm = $scope;
        spendSer.addSpend(vm.spend).then(function(response){
            if(response.data.code == 0){
                $state.go('root.managementFee.managementSpend.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});




