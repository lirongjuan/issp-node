var app = angular.module('projectGroupEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('projectGroupEditCtrl', function($scope,$state,$stateParams,toastr,projectGroupSer){

    var getId = {id:$stateParams.id};
    projectGroupSer.getProject(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
            $scope.positions = $scope.edit.materialNo.split(",");
        }
    });
    //获取所有的用户
    projectGroupSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取所有的入库编号
    projectGroupSer.allGetNo().then(function(response){
        if(response.data.code==0){
            $scope.getNo=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.positions = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.proeditFun = function(){
        var permitArr = [];
        if($scope.edit){
            angular.forEach($scope.positions, function(item){
                permitArr.push(item)
            });
            $scope.edit.materialNum = permitArr.join(',');
            $scope.edit.receiveTime = angular.element('.onetime').val();
            projectGroupSer.editProject($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.material.projectGroup.list[12]');
                    toastr.success($scope.edit.materialName + "已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        }
    };
});





