var app = angular.module('statiAdd', ['toastr']);
app.controller('statiAddCtrl', function ($scope, statiSer, $state, toastr) {
    $scope.showed=true
    statiSer.gitName().then(function(response){
        if(response.data.code == 0){
            $scope.usernames = response.data.data;
        }
    });

    statiSer.gitTier().then(function(response){
        if(response.data.code == 0){
            $scope.applyLevelIds = response.data.data;
        }
    });
    //添加
    $scope.ststAddFun = function () {
        var vm = $scope;
        vm.stst.username = angular.element('.na').val();
        vm.stst.arrangementId = angular.element('.le').val();
        vm.stst.subsidyStart = angular.element('.time1').val();
        vm.stst.subsidyEnd = angular.element('.time2').val();
        vm.stst.occupyStart = angular.element('.time3').val();
        vm.stst.occupyEnd = angular.element('.time4').val();
        console.log(vm.stst)
        statiSer.statAdd(vm.stst).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.rotation.statistical.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




