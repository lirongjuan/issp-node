var app = angular.module('labourEdit', ['toastr']);
app.controller('labourEditCtrl', function($scope, labourSer,$state,toastr,$stateParams){
    var labId = {id : $stateParams.id};
    //获取值
    labourSer.getOneById(labId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.labourEditFun = function(){
        var vm = $scope;
        labourSer.editLabour(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.labour.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});