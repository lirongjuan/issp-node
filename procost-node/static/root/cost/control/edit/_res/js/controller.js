var app = angular.module('controlEdit', ['toastr']);
app.controller('controlEditCtrl', function($scope, controlSer,$state,toastr,$stateParams){
    var conId = {id : $stateParams.id};
    //获取值
    controlSer.getOneById(conId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.controlEditFun = function(){
        var vm = $scope;
        controlSer.editControl(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.cost.control.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});