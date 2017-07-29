var app = angular.module('contractorAdd', ['toastr']);
app.controller('contractorAddCtrl', function ($scope, contractorSer, $state, toastr) {
    //添加
    $scope.detailAddFun = function () {
        var vm = $scope;
        vm.add.creationTime=angular.element('.creationTime').val();
        contractorSer.addContractor(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.payment.contractor.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});




