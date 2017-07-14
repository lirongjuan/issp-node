var app = angular.module('infoEdit', ['toastr','ipCookie']);
app.controller('infoEditCtrl', function($scope,$state,toastr,infoSer,ipCookie,$location,$stateParams){

    $scope.getId={id:$stateParams.id};
    infoSer.getInfo($scope.getId).then(function(response){
       if(response.data.code==0){
           $scope.edit=response.data.data
       }
    });

    $scope.infoEditFun = function(){
        infoSer.editInfo($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.statement.info.list[12]');
                toastr.success( $scope.edit.name+"已成功编辑", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





