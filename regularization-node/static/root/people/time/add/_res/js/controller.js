var app = angular.module('timeAdd', ['toastr']);
app.controller('timeAddCtrl', function ($scope, timeSer, $state, toastr) {

    //添加
    $scope.timeAddFun = function () {
        var vm = $scope;
        timeSer.timeAdd(vm.time).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.people.time.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




