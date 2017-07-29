var app = angular.module('capitalEdit', ['toastr']);
app.controller('capitalEditCtrl', function($scope, capitalSer,$state,toastr,$stateParams){
    var capId = {id : $stateParams.id};
    //获取值
    capitalSer.getOneById(capId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.capEditFun = function(){
        var vm = $scope;
        capitalSer.editCapital(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.out.capital.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});