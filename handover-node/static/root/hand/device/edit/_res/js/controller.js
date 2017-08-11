var app = angular.module('deviceEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('deviceEditCtrl', function($scope,$state,$stateParams,toastr,deviceSer){

    var getId = {id:$stateParams.id};
    deviceSer.getDevice(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的项目组
    deviceSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.num=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    $scope.deviceEditFun = function(){
        deviceSer.editDevice($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.hand.device.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





