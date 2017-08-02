var app = angular.module('recordEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('recordEditCtrl', function($scope,$state,$stateParams,toastr,recordSer){
    var getId = {id:$stateParams.id};
    recordSer.getRecord(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的用户
    recordSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.recordEditFun = function(){
        recordSer.editRecord($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.emption.record.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





