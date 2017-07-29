var app = angular.module('voucherGenerationEdit', ['toastr']);
app.controller('voucherGenerationEditCtrl', function($scope, voucherSer,$stateParams,$state,toastr){
    var voucherData ={id: $stateParams.id};

    //获取ID
    voucherSer.findVoucherId(voucherData).then(function(response){
        if(response.data.code=='0'){
            $scope.editVoucher = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });
    //获取地区
    voucherSer.organizeArea().then(function(response){
        if(response.data.code == 0){
            $scope.allArea = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取项目组
    voucherSer.organizeDepart().then(function(response){
        if(response.data.code == 0){
            $scope.allTeam = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取用户名
    voucherSer.organizeUser().then(function(response){
        if(response.data.code == 0){
            $scope.allName = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    voucherSer.LevelOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.changSelect = function(){
        var data={firstSel:$scope.editVoucher.firstSubjects};
        voucherSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.changThird = function(){
        var data={
            firstSel:$scope.editVoucher.firstSubjects,
            secondSel:$scope.editVoucher.secondSubjects
        };
        voucherSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    //编辑点击提交
    $scope.generationEditFun = function(){
        var vm = $scope;
        vm.editVoucher.voucherDate = angular.element('.voucherDate').val();
        vm.editVoucher.borrowMoneys = vm.editVoucher.borrowMoney;
        vm.editVoucher.loanMoneys = vm.editVoucher.loanMoney;
        voucherSer.editGeneration(vm.editVoucher).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recordAccount.voucherGeneration.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});





