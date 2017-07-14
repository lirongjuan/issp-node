var app = angular.module('projectEdit', ['toastr','ipCookie']);
app.controller('projectEditCtrl', function($scope,$state,$stateParams,toastr,projectSer){

    var getId = {id:$stateParams.id};
    projectSer.getProinfo(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.ProEditFun = function(){
        $scope.edit.times=angular.element('.times').val();
        $scope.edit.heirTime=angular.element('.heirTime').val();
        projectSer.editProinfo($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.project.list[12]');
                toastr.success( $scope.edit.contractName+"已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





