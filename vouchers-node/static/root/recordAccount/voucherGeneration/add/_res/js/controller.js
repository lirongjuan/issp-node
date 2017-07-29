var app = angular.module('voucherGenerationAdd', ['toastr']);
app.controller('voucherGenerationAddCtrl', function($scope, voucherSer,$state,$stateParams,toastr){

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
        var data={firstSel:$scope.voucher.firstSubjects1};
        voucherSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.changSelect2 = function(){
        var data={firstSel:$scope.voucher.firstSubjects2};
        voucherSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel2 = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.changThird = function(){
        var data={
            firstSel:$scope.voucher.firstSubjects1,
            secondSel:$scope.voucher.secondSubjects1
        };
        voucherSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.changThird2 = function(){
        var data={
            firstSel:$scope.voucher.firstSubjects2,
            secondSel:$scope.voucher.secondSubjects2
        };
        voucherSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel2 = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
$scope.addSum = function() {
    $scope.voucher.moneyTotal = $scope.voucher.borrowMoneys1 + $scope.voucher.borrowMoneys2
};
    //添加
    $scope.voucherAddFun = function(){
        var vm = $scope;
        vm.voucher.firstSubjects=[vm.voucher.firstSubjects1,vm.voucher.firstSubjects2].join(',');
        vm.voucher.secondSubjects=[vm.voucher.secondSubjects1,vm.voucher.secondSubjects2].join(',');
        vm.voucher.thirdSubjects=[vm.voucher.thirdSubjects1,vm.voucher.thirdSubjects2].join(',');
        vm.voucher.borrowMoneys=[vm.voucher.borrowMoneys1,vm.voucher.borrowMoneys2].join(',');
        vm.voucher.loanMoneys=[vm.voucher.loanMoneys1,vm.voucher.loanMoneys2].join(',');
        vm.voucher.voucherDate = angular.element('.voucherDate').val();
        voucherSer.addVoucher(vm.voucher).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recordAccount.voucherGeneration.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});




