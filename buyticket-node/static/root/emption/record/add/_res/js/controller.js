var app = angular.module('recordAdd', ['toastr','ipCookie']);
app.controller('recordAddCtrl', function($scope,$state,toastr,recordSer){
    //获取所有的用户
    recordSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.recordAddFun = function(){
        recordSer.addRecord($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.emption.record.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


