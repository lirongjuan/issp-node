/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('assetsAdd', ['toastr']);
app.controller('assetsAddCtrl', function($scope, assetsSer,$state,toastr){
    var firstData = {
        categoryName:'ASSETS'
    }
    //获取一级列表
    assetsSer.firstList(firstData).then(function(response){
        if(response.data.code == 0){
                $scope.firstList = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
    })

    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        assetsSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.initialize.sort.assets.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //控制数字不能小于1
    $scope.changeNum =function(){
        if($scope.data.predictAttendNo < 1){
            $scope.data.predictAttendNo = 1;
        }
    }
});




