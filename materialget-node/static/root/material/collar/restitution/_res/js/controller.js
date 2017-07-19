var app = angular.module('restitution', ['toastr','ipCookie']);
app.controller('restitutionCtrl', function($scope,$state,$stateParams,toastr,collarSer){

    var getId = {id:$stateParams.id};
    collarSer.getCollar(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
            $scope.edit.materialNum=$scope.edit.materialNo;
        }
    });
    $scope.restFun = function(){
        $scope.edit.returnTime = angular.element('.onetime').val();
        collarSer.restCollar($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.material.collar.list[12]');
                toastr.success( "已成功归还！", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





