var app = angular.module('manageEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('manageEditCtrl', function($scope,$state,$stateParams,toastr,manageSer){
    var getId = {id:$stateParams.id};
    manageSer.getManage(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的合同类型
    manageSer.getTypeAll().then(function (response){
        if (response.data.code==0){
            $scope.type= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取所有的合同性质
    manageSer.getNatureAll().then(function (response){
        if (response.data.code==0){
            $scope.nature= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取所有的用户
    manageSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.EditFun = function(){
        $scope.edit.startDate = angular.element('.startDate').val();
        $scope.edit.endDate = angular.element('.endDate').val();
        console.log( $scope.edit);
        manageSer.editManage($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.contract.manage.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





