var app = angular.module('manageAdd', ['toastr','ipCookie']);
app.controller('manageAddCtrl', function($scope,$state,toastr,manageSer){
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
    $scope.standAddFun = function(){
        $scope.add.startDate = angular.element('.startDate').val();
        $scope.add.endDate = angular.element('.endDate').val();
        $scope.add.birth = angular.element('.birth').val();
        $scope.add.leaveDate = angular.element('.leaveDate').val();
        $scope.add.releaseDate = angular.element('.releaseDate').val();
        manageSer.addManage($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.manage.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


