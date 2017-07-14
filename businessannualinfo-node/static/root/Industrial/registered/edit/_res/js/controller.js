var app = angular.module('registeredEdit', ['toastr']);
app.controller('registeredEditCtrl', function($scope, registeredSer,$state,toastr,$stateParams){
    var registeredId = {id : $stateParams.id};
    //获取值
    registeredSer.loginOne(registeredId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.competitorEditFun =function(){
        var vm = $scope;
        var data = vm.data
        registeredSer.loginEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.Industrial.registered.list[12]');
                toastr.success('温馨提示',"编辑成功");
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    }
});
