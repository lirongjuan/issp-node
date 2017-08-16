var app = angular.module('capitalEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('capitalEditCtrl', function($scope,$state,$stateParams,toastr,capitalSer){

    var getId = {id:$stateParams.id};
    capitalSer.getCap(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });

    $scope.CapEditFun = function(){
        capitalSer.editCap($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.ready.capital.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





