var app = angular.module('applyAdd', ['toastr','ipCookie']);
app.controller('applyAddCtrl', function($scope,$state,toastr,applySer){
    //获取所有的地区
    applySer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    applySer.Getposition().then(function (response){
        if (response.data.code==0){
            $scope.position=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    //获取所有的用户
    applySer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取所有的租房编号
    applySer.getNumAll().then(function (response){
        if (response.data.code==0){
            $scope.num= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    applySer.getGroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.applyAddFun = function(){
        applySer.addApply($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.tenement.apply.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


