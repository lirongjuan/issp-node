var app = angular.module('standardEdit', ['toastr','ipCookie']);
app.controller('examineEditCtrl', function($scope,$state,$stateParams,toastr,examineSer){

    var getId = {id:$stateParams.id};
    examineSer.getExamine(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.standardEditFun = function(){
        examineSer.editExamine($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ready.examine.list[12]');
                toastr.success( $scope.edit.subject+"已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





