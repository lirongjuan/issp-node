var app = angular.module('workAdd', ['toastr','ipCookie']);
app.controller('workAddCtrl', function($scope,$state,toastr,workSer){
    //获取所有的项目组
    workSer.getGroup().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    workSer.getStation().then(function (response){
        if (response.data.code==0){
            $scope.station=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    

    $scope.workAddFun = function(){
        $scope.add.workJoinStartTime=angular.element('.workJoinStartTime').val();
        $scope.add.workJoinendTime=angular.element('.workJoinendTime').val();
        workSer.addWork($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.hand.work.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


