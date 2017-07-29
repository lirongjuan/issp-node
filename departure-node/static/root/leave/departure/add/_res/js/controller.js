var app = angular.module('deparAdd', ['toastr']);
app.controller('deparAddCtrl', function ($scope, deparSer, $state, toastr) {
    $scope.showed=true
    //添加
    $scope.deparAddFun = function () {
        var vm = $scope;
        vm.depar.applyDate = angular.element('.time1').val();
        vm.depar.advanceDate = angular.element('.time2').val();
        vm.depar.dimissionDate = angular.element('.time3').val();
        deparSer.deparAdd(vm.depar).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.leave.departure.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




