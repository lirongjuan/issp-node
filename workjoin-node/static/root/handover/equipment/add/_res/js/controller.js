var app = angular.module('equipmentAdd', ['toastr']);
app.controller('equipmentAddCtrl', function($scope, equipmentSer,$state,toastr){
    //添加
    $scope.equipmentAddFun = function(){
        var data = $scope.data;
       
        equipmentSer.equipmentAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.equipment.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





