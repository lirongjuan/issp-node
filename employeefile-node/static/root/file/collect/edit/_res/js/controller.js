var app = angular.module('collectEdit', ['toastr']);
app.controller('collectEditCtrl', function($scope, collectSer,$state,toastr,$stateParams){
    collectSer.nameMessage().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var collectId = {id : $stateParams.id};
    //获取值
    collectSer.getOneById(collectId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.collectEditFun = function(){
        var vm = $scope;
        collectSer.editCollect(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.collect.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});