var app = angular.module('spendEdit', ['toastr']);
app.controller('spendEditCtrl', function($scope, spendSer,$stateParams,$state,toastr){
    var spendData ={id: $stateParams.id};

    //获取ID
    spendSer.findSpendId(spendData).then(function(response){
        if(response.data.code==0){
            $scope.editFee = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.feeEditFun = function(){
        var vm = $scope;
        spendSer.editSpend(vm.editFee).then(function(response){
            if(response.data.code == 0){
                $state.go('root.managementFee.managementSpend.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





