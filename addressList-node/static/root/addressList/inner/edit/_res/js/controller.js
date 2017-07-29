var app = angular.module('basicEdit', ['toastr']);
app.controller('basicEditCtrl', function($scope, basicSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};

    basicSer.allName().then(function(response){
            if(response.data.code == 0){
               $scope.allName = response.data.data;
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    //获取ID
    basicSer.findinnerId(basicData).then(function(response){
        if(response.data.code==0){
            $scope.innerEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.innerEditFun = function(){
        basicSer.editinner($scope.innerEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.inner.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





