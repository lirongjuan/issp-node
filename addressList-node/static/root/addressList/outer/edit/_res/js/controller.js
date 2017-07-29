var app = angular.module('outEdit', ['toastr']);
app.controller('outEditCtrl', function($scope, outerSer,$stateParams,$state,toastr){
    var outData ={id: $stateParams.id};
    //获取ID
    outerSer.findouterId(outData).then(function(response){
        if(response.data.code==0){
            $scope.out = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.outerEditFun = function(){
        outerSer.editouter($scope.outerEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.outer.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





