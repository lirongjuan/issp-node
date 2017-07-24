var app = angular.module('weekAdd', ['toastr','ipCookie']);
app.controller('weekAddCtrl', function($scope,$state,toastr,weekSer){
    //获取所有的地区
    weekSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    weekSer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.WeekAddFun = function(){
        weekSer.addWeek($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.week.list[12]');
                toastr.success( $scope.add.projectGroup+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


