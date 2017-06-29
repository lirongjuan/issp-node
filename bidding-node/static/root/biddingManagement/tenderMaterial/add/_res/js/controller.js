var app = angular.module('MaterialAdd', ['toastr']);
app.controller('MaterialAddCtrl', function ($scope, MaterialSer, $state, toastr) {
    $scope.showed=true
    MaterialSer.biddingNumber().then(function(response){
        if(response.data.code == 0){
            $scope.biddingNumbers = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var obj={biddingNumber:$scope.tender.biddingNumber};
        MaterialSer.getBiddingNum(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    //添加
    $scope.tenderAddFun = function () {
        var vm = $scope;
        vm.tender.biddingNumber = angular.element('.num').val();
        vm.tender.projectName = angular.element('.na').val();
        MaterialSer.addSource(vm.tender).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.tenderMaterial.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




