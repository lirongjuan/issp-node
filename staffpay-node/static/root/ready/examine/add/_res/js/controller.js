var app = angular.module('examineAdd', ['toastr','ipCookie']);
app.controller('examineAddCtrl', function($scope,$state,toastr,examineSer){

    $scope.ExamineAddFun = function(){
        examineSer.addExamine($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ready.examine.list[12]');
                toastr.success( $scope.add.subject+"已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





