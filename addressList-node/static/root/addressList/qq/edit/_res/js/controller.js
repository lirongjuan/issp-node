var app = angular.module('qqEdit', ['toastr']);
app.controller('qqEditCtrl', function($scope, qqSer,$stateParams,$state,toastr){
    var qqData ={id: $stateParams.id};
    //获取ID
    qqSer.findqqId(qqData).then(function(response){
        if(response.data.code==0){
            $scope.qq = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.qqEditFun = function(){
        qqSer.editqq($scope.qq).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.qq.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





