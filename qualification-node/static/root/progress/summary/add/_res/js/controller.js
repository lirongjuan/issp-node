var app = angular.module('add', ['toastr','ipCookie']);
app.controller('addCtrl', function($scope,$state,toastr,summarySer,ipCookie,$location){

    $scope.addFun = function(){
        $scope.add.attestation=angular.element('.rztime').val();
        $scope.add.handleTime=angular.element('.starttime').val();
        $scope.add.endTime=angular.element('.endtime').val();
        summarySer.addProgress($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.progress.summary.list[12]');
                toastr.success( $scope.add.qualifications+"已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





