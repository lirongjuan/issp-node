var app = angular.module('annexEdit', ['toastr']);
app.controller('annexEditCtrl', function($scope, annexSer,$state,toastr,$stateParams){
    var anId = {id : $stateParams.id};
    //获取值
    annexSer.getOneById(anId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.annexEditFun = function(){
        var vm = $scope;
        annexSer.editAnnex(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.annex.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});