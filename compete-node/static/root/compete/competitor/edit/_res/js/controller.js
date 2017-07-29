var app = angular.module('companyEdit', ['toastr']);
app.controller('companyEditCtrl', function($scope,competitorSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    competitorSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.competitorEditFun =function(){
        var vm = $scope;
        var data = vm.data
        competitorSer.putcompetitorEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.competitor.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
});