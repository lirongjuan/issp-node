var app = angular.module('workAdd', ['toastr']);
app.controller('workAddCtrl', function ($scope, workSer, $state, toastr) {
    $scope.showed=true
    //获取交接人姓名
    // workSer.workName().then(function(response){
    //     if(response.data.code==0){
    //         $scope.handovers = response.data.data;
    //     }else{
    //         toastr.error(response.data.msg, '温馨提示');
    //     }
    // });
    //获取被交接人姓名
    // workSer.workedName().then(function(response){
    //     if(response.data.code==0){
    //         $scope.transferreds = response.data.data;
    //     }else{
    //         toastr.error(response.data.msg, '温馨提示');
    //     }
    // });
    //添加
    $scope.workAddFun = function () {
        var vm = $scope;
        // vm.work.handover = angular.element('.handover').val();
        // vm.work.transferred = angular.element('.transferred').val();
        workSer.workAdd(vm.work).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.leave.work.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




