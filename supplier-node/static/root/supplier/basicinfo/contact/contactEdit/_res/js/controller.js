var app = angular.module('contactEdit', ['toastr','ipCookie']);
app.controller('contactEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var contId = {id : $stateParams.suId};
    //获取值
    basicinfoSer.editContactById(contId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.contEditFun = function(){
        var vm = $scope;
        basicinfoSer.editContact(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});