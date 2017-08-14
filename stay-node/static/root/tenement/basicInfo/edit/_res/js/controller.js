var app = angular.module('basicInfoEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('basicInfoEditCtrl', function($scope,$state,$stateParams,toastr,basicInfoSer){

    var getId = {id:$stateParams.id};
    basicInfoSer.getBasic(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.basicEditFun = function(){
        $scope.edit.rentBeginTime=angular.element('.rentBeginTime').val();
        $scope.edit.rentEndTime=angular.element('.rentEndTime').val();
        $scope.edit.rentTime=angular.element('.rentTime').val();
        $scope.edit.paymentTime=angular.element('.paymentTime').val();
        basicInfoSer.editBasic($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.tenement.basicInfo.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





