var app = angular.module('competitorOrganize', ['toastr']);
app.controller('servereCordOrganizeCtr',function($scope,servereCordSer,$state,toastr,$stateParams){
    var EditId = {id : $stateParams.id};
    //获取值
    servereCordSer.getOneById(EditId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    $scope.organizeSmit = function(){
        var vm = $scope;
        var data = $scope.data;
        servereCordSer.fundModuleOpinionEidt(data).then(function(response){
            if(response.data.code == 0){
                toastr.success('温馨提示','提交成功');
                $state.go('root.marketActivity.servereCord.list[12]');
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        });
    };
});