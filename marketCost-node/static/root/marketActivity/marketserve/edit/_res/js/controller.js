var app = angular.module('companyEdit', ['toastr']);
app.controller('companyEditCtrl', function($scope, marketserveSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    marketserveSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.planActivityTiming = angular.element('.addPlanTime').val();//计划时间
        var data = $scope.data;
        data.id = companyId.id;
        marketserveSer.marketserveapplyEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.marketserve.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        })
    }
    
});
   