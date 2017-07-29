var app = angular.module('controlActual', ['toastr']);
app.controller('controlActualCtrl', function($scope, controlSer,$state,toastr,$stateParams){
    var conId = {id : $stateParams.id};
    //获取值
    controlSer.getOneById(conId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.conActualFun = function(){
        var vm = $scope;
        controlSer.actualControl(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.cost.control.list[12]');
                toastr.success( "已修改实际收入", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});