var app = angular.module('basicInfoEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('basicInfoEditCtrl', function($scope,$state,$stateParams,toastr,basicInfoSer){
    var getId = {id:$stateParams.id};
    basicInfoSer.getBasic(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });

    $scope.basicEditFun = function(){
        $scope.edit.handlingDate=angular.element('.onetime').val();
        basicInfoSer.editBasic($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.card.basicInfo.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





