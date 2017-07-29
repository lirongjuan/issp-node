var app = angular.module('waitEdit', ['toastr']);
app.controller('waitEditCtrl', function($scope, waitSer,$state,toastr,$stateParams){
    var getId = {id : $stateParams.id};
    //获取值
    waitSer.getOneById(getId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.payEditFun = function(){
        var vm = $scope;
        waitSer.payByOne(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.bonus.wait.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});