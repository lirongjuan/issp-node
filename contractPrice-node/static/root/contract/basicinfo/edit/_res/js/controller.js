var app = angular.module('basicinfoEdit', ['toastr','ipCookie']);
app.controller('basicinfoEditCtrl', function($scope,$state,$stateParams,toastr,basicinfoSer,ipCookie,$location){

    var getId = {id:$stateParams.id};
    basicinfoSer.getBasicinfo(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.basicEditFun = function(){
        $scope.edit.startProjectTime=angular.element('.starttime').val();
        $scope.edit.endProjectTime=angular.element('.endtime').val();
        basicinfoSer.editBasicinfo($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.basicinfo.list[12]');
                toastr.success( $scope.edit.area+"已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





