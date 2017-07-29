var app = angular.module('detailedEdit', ['toastr']);
app.controller('detailedEditCtrl', function($scope, detailedSer,$state,toastr,$stateParams){
    var detailId = {id : $stateParams.id};
    detailedSer.nameMessage().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //获取值
    detailedSer.getOneById(detailId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.detailedEditFun = function(){
        var vm = $scope;
        detailedSer.editDetailed(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.detailed.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});