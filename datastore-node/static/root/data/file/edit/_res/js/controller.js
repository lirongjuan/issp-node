var app = angular.module('fileEdit', ['toastr']);
app.controller('fileEditCtrl', function($scope, fileSer,$state,toastr,$stateParams){
    var fileId = {id : $stateParams.id};
    fileSer.getOneById(fileId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.fileEditFun = function(){
        var vm = $scope;
        vm.editInfo.releaseTime=angular.element('.releaseTime').val();
        vm.editInfo.updateTime=angular.element('.updateTime').val();
        fileSer.editFile(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.data.file.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});