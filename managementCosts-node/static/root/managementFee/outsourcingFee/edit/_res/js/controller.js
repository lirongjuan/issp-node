var app = angular.module('outsourcingFeeEdit', ['toastr']);
app.controller('outsourcingFeeEditCtrl', function($scope, outsourcingSer,$stateParams,$state,toastr){
    var outsourcingData ={id: $stateParams.id};

    //获取ID
    outsourcingSer.findOutsourcingId(outsourcingData).then(function(response){
        if(response.data.code==0){
            $scope.editOutsourcing = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.feeEditFun = function(){
        var vm = $scope;
        outsourcingSer.editOutsourcing(vm.editOutsourcing).then(function(response){
            if(response.data.code == 0){
                $state.go('root.managementFee.outsourcingFee.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





