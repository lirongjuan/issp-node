var app = angular.module('otherEdit', ['toastr']);
app.controller('otherEditCtrl', function($scope, otherSer,$stateParams,$state,toastr){
    var otherData ={id: $stateParams.id};
    //获取ID
    otherSer.findotherId(otherData).then(function(response){
        if(response.data.code==0){
            $scope.other = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //编辑点击提交
    $scope.otherEditFun = function(){
        $scope.other.useDate = angular.element('.useDate').val();//使用时间
        otherSer.editother($scope.other).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.other.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





