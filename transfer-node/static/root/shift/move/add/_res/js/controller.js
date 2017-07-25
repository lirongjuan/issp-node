var app = angular.module('moveAdd', ['toastr','ipCookie']);
app.controller('moveAddCtrl', function($scope,$state,toastr,moveSer){
    //获取所有的地区
    moveSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    moveSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    //获取所有的用户
    moveSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.moveAddFun = function(){
        $scope.add.applyDate=angular.element('.onetime').val();
        $scope.add.transferTime=angular.element('.twotime').val();
        moveSer.addMove($scope.add).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.shift.move.list[12]');
                toastr.success( $scope.add.proposer+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


