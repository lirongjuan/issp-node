var app = angular.module('yearsAdd', ['toastr','ipCookie']);
app.controller('yearsAddCtrl', function($scope,$state,toastr,yearsSer){
    //获取所有的地区
    yearsSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    yearsSer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.YearsAddFun = function(){
        yearsSer.addYears($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.years.list[12]');
                toastr.success( $scope.add.projectGroup+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


