var app = angular.module('peopleAuditD', ['toastr']);
app.controller('peopleAuditDCtrl', function($scope, peopleSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    //获取ID
    peopleSer.popId(infoData).then(function(response){
        if(response.data.code==0){
            $scope.pop = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.peopleEditFun = function(){
        var vm = $scope;
        // vm.pop.transferAuditOpinion = angular.element('.num').val();
        peopleSer.popAudit(vm.pop).then(function(response){
            if(response.data.code == 0){
                $state.go('root.personnel.people.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





