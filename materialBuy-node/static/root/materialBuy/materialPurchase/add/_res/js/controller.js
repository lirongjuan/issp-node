var app = angular.module('purchaseAddM', ['toastr']);
app.controller('purchaseAddCtrl', function($scope, purchaseSer,$state,toastr){
    //获取所有地区
    purchaseSer.getAllArea().then(function (response) {
        if(response.data.code==0){
            $scope.getAllAreas = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有人
    purchaseSer.getAllName().then(function (response) {
        if(response.data.code==0){
            $scope.getAllNames = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有项目组
    purchaseSer.getAllTeam().then(function (response) {
        if(response.data.code==0){
            $scope.getAllTeams = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.purchaseAddFun = function(){
        var vm = $scope;
        vm.purchase.subscribeDate = angular.element('.subscribeDate').val();
        purchaseSer.addPurchase(vm.purchase).then(function(response){
            if(response.data.code == 0){
                $state.go('root.materialBuy.materialPurchase.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});




