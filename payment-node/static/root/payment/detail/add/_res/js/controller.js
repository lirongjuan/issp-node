var app = angular.module('detailAdd', ['toastr']);
app.controller('detailAddCtrl', function ($scope, detailSer, $state, toastr) {
    detailSer.idByDetail().then(function(response){
        if(response.data.code == 0){
            $scope.idData = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //添加
    $scope.detailAddFun = function () {
        var vm = $scope;
        vm.add.finishTime=angular.element('.finishTime').val();
        vm.add.checkTime=angular.element('.checkTime').val();
        vm.add.auditTime=angular.element('.auditTime').val();
        vm.add.countTime=angular.element('.countTime').val();
        vm.add.billTime=angular.element('.billTime').val();
        vm.add.planTime=angular.element('.planTime').val();
        vm.add.accountTime=angular.element('.accountTime').val();
        detailSer.addDetail(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.payment.detail.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});




