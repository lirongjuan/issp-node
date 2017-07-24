var app = angular.module('analyseYearsAdd', ['toastr','ipCookie']);
app.controller('analyseYearsAddCtrl', function($scope,$state,toastr,analyseYearsSer){
    //获取所有的地区
    analyseYearsSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    analyseYearsSer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.YearsAddFun = function(){
        analyseYearsSer.addYears($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.analyseYears.list[12]');
                toastr.success( $scope.add.projectGroup+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


