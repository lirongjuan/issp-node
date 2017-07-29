var app = angular.module('companyEdit', ['toastr']);
app.controller('companyEditCtrl', function($scope, servereCordSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    servereCordSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.planActivityTiming = angular.element('.addPlanTime').val();//计划时间
        $scope.data.actualActivityTiming = angular.element('.addActualTime').val();//实际时间
        var vm = $scope;
        var data = vm.data
        servereCordSer.marketserveapplyEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.servereCord.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        })
    }
    
});
   