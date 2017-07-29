var app = angular.module('competitorOrganize', ['toastr']);
app.controller('marketserveOrganizeCtr',function($scope,marketserveSer,$state,toastr,$stateParams){
    var EditId = {id : $stateParams.id};
    //获取值
    marketserveSer.getOneById(EditId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    $scope.organizeSmit = function(){
        var vm = $scope;
        var data = $scope.data;
        marketserveSer.fundModuleOpinionEidt(data).then(function(response){
            if(response.data.code == 0){
                toastr.success('温馨提示','编辑资金模块意见成功');
                $state.go('root.marketActivity.marketserve.list[12]')
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        })
    }
});