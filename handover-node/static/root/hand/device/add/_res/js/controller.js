var app = angular.module('deviceAdd', ['toastr','ipCookie']);
app.controller('deviceAddCtrl', function($scope,$state,toastr,deviceSer){
    //获取所有的项目组
    deviceSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.num=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    $scope.deviceAddFun = function(){
        deviceSer.addDevice($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.hand.device.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


