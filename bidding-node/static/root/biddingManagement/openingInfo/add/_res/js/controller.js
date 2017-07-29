var app = angular.module('openingInfoAdd', ['toastr']);
app.controller('openingAddCtrl', function ($scope, openingSer, $state, toastr) {
$scope.showed=true
    openingSer.biddingNumber().then(function(response){
        if(response.data.code == 0){
            $scope.biddingNumbers = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var obj={biddingNumber:$scope.opening.biddingNumber};
        openingSer.getBiddingNum(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    //添加
    $scope.openAddFun = function () {
        var vm = $scope;
        vm.opening.bidOpeningTime = angular.element('.bidOpeningTime').val();
        vm.opening.biddingNumber = angular.element('.num').val();
        vm.opening.projectName = angular.element('.na').val();
        openingSer.addBidOpening(vm.opening).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.openingInfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




