var app = angular.module('payAdd', ['toastr']);
app.controller('payAddCtrl', function($scope, waitSer,$state,toastr,$stateParams){
    var capId = {id : $stateParams.id};
    //获取值
    waitSer.getOneById(capId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.payAddFun = function(){
        var vm = $scope;
        waitSer.payWait(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.out.wait.list[12]');
                toastr.success("已编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





