var app = angular.module('scoreAdd', ['toastr']);
app.controller('scoreAddCtrl', function ($scope, scoreSer, $state, toastr) {

    //添加
    $scope.scoreAddFun = function () {
        var vm = $scope;
        scoreSer.scoreAdd(vm.score).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.people.score.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




