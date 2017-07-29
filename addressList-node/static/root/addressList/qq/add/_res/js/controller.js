var app = angular.module('qqAdd', ['toastr']);
app.controller('qqAddCtrl', function($scope, qqSer,$state,toastr){
    //添加
    $scope.qqAddFun = function(){
        qqSer.addqq($scope.qq).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.qq.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




