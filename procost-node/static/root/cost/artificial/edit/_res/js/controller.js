var app = angular.module('artificialEdit', ['toastr']);
app.controller('artificialEditCtrl', function($scope, artificialSer,$state,toastr,$stateParams){
    var artId = {id : $stateParams.id};
    //获取值
    artificialSer.getOneById(artId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.artEditFun = function(){
        var vm = $scope;
        artificialSer.editArtificial(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.cost.artificial.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});