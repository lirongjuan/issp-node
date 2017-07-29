var app = angular.module('publicEdit', ['toastr']);
app.controller('publicEditCtrl', function($scope, publicSer,$stateParams,$state,toastr){
    var publicData ={id: $stateParams.id};
    //获取ID
    publicSer.findpublicId(publicData).then(function(response){
        if(response.data.code==0){
            $scope.public = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.publicEditFun = function(){
        publicSer.editpublic($scope.public).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.public.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





