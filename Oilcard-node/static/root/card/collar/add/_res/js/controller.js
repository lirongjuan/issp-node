var app = angular.module('collarAdd', ['toastr','ipCookie']);
app.controller('collarAddCtrl', function($scope,$state,toastr,collarSer){
    //获取所有的地区
    collarSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的编号
    collarSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.getNo=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    //获取所有的用户
    collarSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.collarAddFun = function(){
        $scope.add.receiveDate=angular.element('.twotime').val();
        collarSer.addCollar($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.card.collar.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


