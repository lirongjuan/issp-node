var app = angular.module('standardEdit', ['toastr','ipCookie']);
app.controller('standardEditCtrl', function($scope,$state,$stateParams,toastr,standardSer,ipCookie,$location){

    var getId = {id:$stateParams.id};
    standardSer.getStandard(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.standardEditFun = function(){
        $scope.edit.date=angular.element('.time').val();
        standardSer.editStandard($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.standard.list[12]');
                toastr.success( $scope.edit.area+"已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





