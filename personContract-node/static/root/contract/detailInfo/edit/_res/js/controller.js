var app = angular.module('detailInfoEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('detailInfoEditCtrl', function($scope,$state,$stateParams,toastr,detailInfoSer){
    var getId = {id:$stateParams.id};
    detailInfoSer.getManage(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
   

    $scope.EditFun = function(){
        $scope.edit.birth = angular.element('.birth').val();
        $scope.edit.leaveDate = angular.element('.leaveDate').val();
        $scope.edit.releaseDate = angular.element('.releaseDate').val();
        console.log( $scope.edit);
        detailInfoSer.editDetail($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.contract.detailInfo.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





