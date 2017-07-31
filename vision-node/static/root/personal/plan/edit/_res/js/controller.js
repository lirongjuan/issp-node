var app = angular.module('planEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('planEditCtrl', function($scope,$state,$stateParams,toastr,planSer){

    var getId = {id:$stateParams.id};
    planSer.getPlan(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });

    $scope.panEditFun = function(){
        $scope.edit.entryTime=angular.element('.onetime').val();
        $scope.edit.planningDate=angular.element('.twotime').val();
        $scope.edit.expectedCompletionTime=angular.element('.threetime').val();
        planSer.editPlan($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.personal.plan.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





