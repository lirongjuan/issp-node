var app = angular.module('occupationalEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('occupationalEditCtrl', function($scope,$state,$stateParams,toastr,occupationalSer){

    var getId = {id:$stateParams.id};
    occupationalSer.getOcc(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });

    $scope.OccEditFun = function(){
        $scope.edit.entryTime=angular.element('.onetime').val();
        $scope.edit.planningDate=angular.element('.twotime').val();
        $scope.edit.expectedCompletionTime=angular.element('.threetime').val();
        $scope.edit.actualCompletionTime=angular.element('.fourtime').val();
        occupationalSer.editOcc($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.personal.occupational.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





