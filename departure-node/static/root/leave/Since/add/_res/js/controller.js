var app = angular.module('sinAdd', ['toastr']);
app.controller('sinAddCtrl', function ($scope, sinSer, $state, toastr) {
    $scope.showed=true
    //离职人员姓名
    // sinSer.sinName().then(function(response){
    //     if(response.data.code==0){
    //         $scope.sinNames = response.data.data;
    //     }else{
    //         toastr.error(response.data.msg, '温馨提示');
    //     }
    // });
    //添加
    $scope.sinAddFun = function () {
        var vm = $scope;
        vm.sin.applyDate = angular.element('.time1').val();
        vm.sin.advanceDate = angular.element('.time2').val();
        vm.sin.dimissionDate = angular.element('.time3').val();
        sinSer.sinAdd(vm.sin).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.leave.Since.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




