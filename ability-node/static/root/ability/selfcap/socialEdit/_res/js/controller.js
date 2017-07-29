var app = angular.module('socialPEdit', ['toastr']);
app.controller('socialPEditCtrl', function($scope, selfcapSer,$state,toastr,$stateParams){
    var selfcapId2 = {id : $stateParams.subId};
    //获取值
    selfcapSer.getFiveById(selfcapId2).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.selfcapEditFun = function(){
        var vm = $scope;
        selfcapSer.editSocialSelf(vm.peditInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.selfcap.socialList[12]',{id:$stateParams.id});
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});