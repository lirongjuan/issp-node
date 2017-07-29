var app = angular.module('implementationEdit', ['toastr']);
app.controller('implementationEditCtrl', function($scope, implementationSer,$state,toastr,$stateParams){
    var projectId = {id : $stateParams.id};
    //获取值
    implementationSer.getImplementationOneById(projectId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.implementationEditFun = function(){
        var vm = $scope;
        implementationSer.editImplementationProject(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.implementation.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});