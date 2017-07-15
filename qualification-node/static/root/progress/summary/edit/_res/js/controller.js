var app = angular.module('edit', ['toastr','ipCookie']);
app.controller('editCtrl', function($scope,$state,toastr,summarySer,ipCookie,$location,$stateParams){

    var getId={id:$stateParams.id};
    summarySer.getProgress(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }

    });
    $scope.editFun = function(){
        $scope.edit.attestation=angular.element('.rztime').val();
        $scope.edit.handleTime=angular.element('.starttime').val();
        $scope.edit.endTime=angular.element('.endtime').val();
        summarySer.editProgress($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.progress.summary.list[12]');
                toastr.success( $scope.edit.qualifications+"已成功编辑", '温馨提示');
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





