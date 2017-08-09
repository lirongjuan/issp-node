var app = angular.module('changeInfoEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('changeInfoEditCtrl', function($scope,$state,$stateParams,toastr,changeInfoSer){
    var getId = {id:$stateParams.id};
    changeInfoSer.getChange(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });

    $scope.changeEditFun = function(){
        $scope.edit.change = angular.element('.change').val();
        changeInfoSer.editChange($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.contract.changeInfo.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





