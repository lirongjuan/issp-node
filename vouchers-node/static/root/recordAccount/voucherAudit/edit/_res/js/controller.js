var app = angular.module('voucherAuditEdit', ['toastr']);
app.controller('voucherAuditEditCtrl', function($scope, $rootScope,auditSer,$stateParams,$state,toastr){
    var voucherData ={id: $stateParams.id};
    //获取ID
    auditSer.findVoucherId(voucherData).then(function(response){
        if(response.data.code==0){
            $scope.editVoucher = response.data.data;
            $scope.editVoucher.borrowMoneys_ = $scope.editVoucher.borrowMoneys[0];
            $scope.editVoucher.loanMoneys_ = $scope.editVoucher.loanMoneys[0];
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });
    //获取地区
    auditSer.organizeArea().then(function(response){
        if(response.data.code == 0){
            $scope.allArea = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取项目组
    auditSer.organizeDepart().then(function(response){
        if(response.data.code == 0){
            $scope.allTeam = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取用户名
    auditSer.organizeUser().then(function(response){
        if(response.data.code == 0){
            $scope.allName = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    auditSer.LevelOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var data={firstSel:$scope.editVoucher.firstSubjects};
        auditSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
            }
        });
    };
    $scope.changSelect2 = function(){
        var data={firstSel:$scope.editVoucher.firstSubjects2};
        auditSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel2 = response.data.data;
            }
        });
    };
    $scope.changThird = function(){
        var data={
            firstSel:$scope.editVoucher.firstSubjects,
            secondSel:$scope.editVoucher.secondSubjects
        };
        auditSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel = response.data.data;
            }
        });
    };
    $scope.changThird2 = function(){
        var data={
            firstSel:$scope.editVoucher.firstSubjects2,
            secondSel:$scope.editVoucher.secondSubjects2
        };
        auditSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel2 = response.data.data;
            }
        });
    };
    //编辑点击提交
    $scope.auditEditFun = function(){
        var vm = $scope;
        vm.editVoucher.firstSubjects += (","+vm.editVoucher.firstSubjects2);
        vm.editVoucher.secondSubjects += (","+vm.editVoucher.secondSubjects2);
        vm.editVoucher.thirdSubjects += (","+vm.editVoucher.thirdSubjects2);
        vm.editVoucher.borrowMoneys += (","+vm.editVoucher.borrowMoneys2);
        vm.editVoucher.loanMoneys += (","+vm.editVoucher.loanMoneys2);
        vm.editVoucher.borrowMoneys += (","+vm.editVoucher.borrowMoneys_);
        vm.editVoucher.loanMoneys += (","+vm.editVoucher.loanMoneys_);
        vm.editVoucher.voucherDate = angular.element('.voucherDate').val();
        auditSer.editSplit(vm.editVoucher).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recordAccount.voucherAudit.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});





