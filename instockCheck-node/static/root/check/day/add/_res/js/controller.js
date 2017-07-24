var app = angular.module('dayAdd', ['toastr','ipCookie']);
app.controller('dayAddCtrl', function($scope,$state,toastr,daySer){
    //获取所有的地区
    daySer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    daySer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.DayAddFun = function(){
        daySer.addDay($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.day.list[12]');
                toastr.success( $scope.add.projectGroup+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


