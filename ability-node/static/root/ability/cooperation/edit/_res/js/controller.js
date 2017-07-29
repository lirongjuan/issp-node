var app = angular.module('cooperationEdit', ['toastr']);
app.controller('cooperationEditCtrl', function($scope, cooperationSer,$state,toastr,$stateParams){
    var coopcapId = {id : $stateParams.id};
    //获取值
    cooperationSer.getThreeById(coopcapId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.coopcapIdEditFun = function(){
        var vm = $scope;
        cooperationSer.editCooperationAbility(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.cooperation.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
      });
    };
});