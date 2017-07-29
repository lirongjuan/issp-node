var app = angular.module('conditAdd', ['toastr']);
app.controller('conditAddCtrl', function ($scope, conditSer, $state, toastr) {
    $scope.showed=true
    // conditSer.biddingNumber().then(function(response){
    //     if(response.data.code == 0){
    //         $scope.biddingNumbers = response.data.data;
    //     }
    // });

    // $scope.changSelect = function(){
    //     var obj={biddingNumber:$scope.condit.biddingNumber};
    //     conditSer.getBiddingNum(obj).then(function(response){
    //         if(response.data.code == 0){
    //             $scope.projectNames = response.data.data;
    //         }
    //     });
    // };
    //添加
    $scope.conditAddFun = function () {
        var vm = $scope;
        // vm.condit.biddingNumber = angular.element('.num').val();
        // vm.condit.projectName = angular.element('.na').val();
        conditSer.conditAdd(vm.condit).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.rotation.conditions.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




