var app = angular.module('repertoryAdd', ['toastr','ipCookie']);
app.controller('repertoryAddCtrl', function($scope,$state,toastr,repertorySer){
    //获取所有的地区
    repertorySer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    repertorySer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.RepAddFun = function(){
        repertorySer.addRep($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.stock.repertory.list[12]');
                toastr.success( $scope.add.projectGroup+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


