var app = angular.module('equipmentEdit', ['toastr']);
app.controller('equipmentEditCtrl', function($scope, equipmentSer,$state,toastr,$stateParams,$filter){
    var equipmentId = {id : $stateParams.id};
    //获取值
    equipmentSer.equipmentId(equipmentId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.equipmentEditFun = function(){
        var data = $scope.data;

        equipmentSer.equipmentEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.equipment.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});