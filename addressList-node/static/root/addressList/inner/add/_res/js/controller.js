var app = angular.module('basicAdd', ['toastr']);
app.controller('basicAddCtrl', function($scope, basicSer,$state,toastr){
    basicSer.allName().then(function(response){
            if(response.data.code == 0){
               $scope.allName = response.data.data;
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    //添加
    $scope.basicAddFun = function(){
        var data = $scope.basic;
        basicSer.addinner(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.inner.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

});




