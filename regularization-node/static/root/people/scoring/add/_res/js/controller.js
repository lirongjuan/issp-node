var app = angular.module('scoringAdd', ['toastr']);
app.controller('scoringAddCtrl', function ($scope, scoringSer, $state, toastr) {

    //添加
    $scope.scoringAddFun = function () {
        var vm = $scope;
        scoringSer.scoringAdd(vm.scoring).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.people.scoring.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




