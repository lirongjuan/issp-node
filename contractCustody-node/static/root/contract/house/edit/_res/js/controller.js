var app = angular.module('houseEdit', ['toastr','ipCookie']);
app.controller('houseEditCtrl', function($scope,$state,$stateParams,toastr,houseSer){

    var getId = {id:$stateParams.id};
    houseSer.getHouse(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.ProEditFun = function(){
        $scope.edit.times=angular.element('.times').val();
        $scope.edit.heirTime=angular.element('.heirTime').val();
        houseSer.editHouse($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.house.list[12]');
                toastr.success( $scope.edit.contractName+"已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





