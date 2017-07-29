var app = angular.module('coverAdd', ['toastr']);
app.controller('coverAddCtrl', function ($scope, coverSer, $state, toastr) {
    $scope.showed=true
    coverSer.gitLevel().then(function(response){
        if(response.data.code == 0){
            $scope.applyLevelIds = response.data.data;
        }
    });

    // $scope.changSelect = function(){
    //     var obj={biddingNumber:$scope.cover.biddingNumber};
    //     coverSer.getBiddingNum(obj).then(function(response){
    //         if(response.data.code == 0){
    //             $scope.projectNames = response.data.data;
    //         }
    //     });
    // };
    //添加
    $scope.coverAddFun = function () {
        var vm = $scope;
        vm.cover.applyLevelId = angular.element('.le').val();
        coverSer.coverAdd(vm.cover).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.rotation.cover.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




