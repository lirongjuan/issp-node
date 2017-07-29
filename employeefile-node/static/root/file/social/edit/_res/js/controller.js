var app = angular.module('socialEdit', ['toastr']);
app.controller('socialEditCtrl', function($scope, socialSer,$state,toastr,$stateParams){
    var basicId = {id : $stateParams.id};
    //获取值
    socialSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.socialEditFun = function(){
        var vm = $scope;
        socialSer.editSocial(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.social.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});