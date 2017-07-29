var app = angular.module('readyEdit', ['toastr']);
app.controller('readyEditCtrl', function($scope, readySer,$state,toastr,$stateParams){
    var artId = {id : $stateParams.id};
    //获取值
    readySer.getOneById(artId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.readyEditFun = function(){
        var vm = $scope;
        readySer.editReady(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.bonus.ready.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});