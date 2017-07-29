var app = angular.module('inEdit', ['toastr']);
app.controller('inEditCtrl', function($scope,inventorySer,$stateParams,$state,toastr){
    var inventoryData ={id: $stateParams.id};

    //获取ID
    inventorySer.findInventoryId(inventoryData).then(function(response){
        if(response.data.code==0){
            $scope.editInventory = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.inventoryEditFun = function(){
        var vm = $scope;
        vm.editInventory.inventoryTime = angular.element('.inventoryTime').val();
        inventorySer.editInventory(vm.editInventory).then(function(response){
            if(response.data.code == 0){
                $state.go('root.equipmentInventory.inventory.list[12]');
                toastr.success( "盘点成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





