var app = angular.module('outsourcingFeeAdd', ['toastr']);
app.controller('outsourcingFeeAddCtrl', function($scope, outsourcingSer,$state,toastr){

    outsourcingSer.getOutsourcingYear().then(function(response){
        if(response.data.code == 0){
            $scope.outsourcingYear = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.outsourcingAddFun = function(){
        var vm = $scope;
        outsourcingSer.addOutsourcing(vm.outsourcing).then(function(response){
            if(response.data.code == 0){
                $state.go('root.managementFee.outsourcingFee.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});




