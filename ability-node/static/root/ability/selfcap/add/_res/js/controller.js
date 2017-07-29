var app = angular.module('selfcapAdd', ['toastr']);
app.controller('selfcapAddCtrl', function($scope, selfcapSer,$state,toastr){
    //添加个人能力
    $scope.personAddFun = function(){
        var vm = $scope;
        var data = {
            name: vm.addname,
            capacity: vm.addcapacity,
            selfJobTitle: vm.addselfJobTitle,
            positionTitle: vm.addpositionTitle,
            workYear: vm.addworkYear,
            selfProject: vm.addselfProject,
           };
        selfcapSer.addSelfCapAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.selfcap.list[12]');
                toastr.success( vm.addname+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});





