var app = angular.module('Arganize', ['toastr']);
app.controller('servercordOpinionCtr',function($scope,servereCordSer,$state,toastr,$stateParams){
    var EditId = {id : $stateParams.id};
    //获取值
    servereCordSer.getOneById(EditId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    $scope.Smit = function(){
        var vm = $scope;
        var data = $scope.data;
        servereCordSer.executiveOpinionEidt(data).then(function(response){
            if(response.data.code == 0){
                toastr.success('温馨提示','编辑资金模块意见成功');
                $state.go('root.marketActivity.servereCord.list[12]');
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        })
    }
});