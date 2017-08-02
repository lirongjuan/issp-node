var app = angular.module('standardEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('standardEditCtrl', function($scope,$state,$stateParams,toastr,standardSer){
    var getId = {id:$stateParams.id};
    standardSer.getStand(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });

    $scope.standEditFun = function(){
        standardSer.editStand($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.emption.standard.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





