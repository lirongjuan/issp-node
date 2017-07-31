var app = angular.module('occupationalAdd', ['toastr','ipCookie']);
app.controller('occupationalAddCtrl', function($scope,$state,toastr,occupationalSer){

    $scope.OccAddFun = function(){
        $scope.add.entryTime=angular.element('.onetime').val();
        $scope.add.planningDate=angular.element('.twotime').val();
        $scope.add.expectedCompletionTime=angular.element('.threetime').val();
        $scope.add.actualCompletionTime=angular.element('.fourtime').val();
        occupationalSer.addOcc($scope.add).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.personal.occupational.list[12]');
                toastr.success("已成功添加!", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


