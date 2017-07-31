var app = angular.module('planAdd', ['toastr','ipCookie']);
app.controller('planAddCtrl', function($scope,$state,toastr,planSer){

    $scope.planAddFun = function(){
        $scope.add.entryTime=angular.element('.onetime').val();
        $scope.add.planningDate=angular.element('.twotime').val();
        $scope.add.expectedCompletionTime=angular.element('.threetime').val();
        planSer.addPlan($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.personal.plan.list[12]');
                toastr.success("已成功添加!", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


