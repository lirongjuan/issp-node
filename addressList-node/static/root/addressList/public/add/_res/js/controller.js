var app = angular.module('publicAdd', ['toastr']);
app.controller('publicAddCtrl', function($scope, publicSer,$state,toastr){
    //添加
    $scope.publicAddFun = function(){
        publicSer.addpublic($scope.public).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.public.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




