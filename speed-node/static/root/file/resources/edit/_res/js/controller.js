var app = angular.module('resourcesEdit', ['toastr']);
app.controller('resourcesEditCtrl', function($scope, resourcesSer,$state,toastr,$stateParams){
    var basicId = {id : $stateParams.id};
    //获取值
    resourcesSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        resourcesSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.resources.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});