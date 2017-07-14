var app = angular.module('reviewAdd', ['toastr']);
app.controller('reviewAddCtrl', function ($scope, reviewSer, $state, toastr) {
$scope.showed=true
    //添加
    $scope.openAddFun = function () {
        var vm = $scope;
        reviewSer.addReview(vm.review).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.equipment.review.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




