var app = angular.module('emailEdit', ['toastr']);
app.controller('emailEditCtrl', function($scope, emailSer,$state,toastr,$stateParams){
    var emaiId = {id : $stateParams.id};
    //获取值
    emailSer.getFourById(emaiId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            $scope.objLists = $scope.data.sendUser.split(',');
        }
    });
    //获取所有地区
    emailSer.allAreas().then(function(response){
        if(response.data.code == 0){
            $scope.allAreas = response.data.data;
        }else {
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    $scope.objLists = [];//对象列表
    $scope.emails = ['个人邮箱','公邮','自由录入'];
    $scope.addMail = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };
    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }
    //提交
    $scope.emaiIdEditFun = function(){
        var vm = $scope;
        var data = $scope.editInfo;
        data.sendUsers = $scope.objLists;
        emailSer.editEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.email.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});