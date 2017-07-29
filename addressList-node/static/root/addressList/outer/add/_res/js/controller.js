var app = angular.module('outAdd', ['toastr']);
app.controller('outAddCtrl', function($scope, outerSer,$state,toastr){
    //添加
    $scope.outAddFun = function(){
        outerSer.addouter($scope.out).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.outer.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




