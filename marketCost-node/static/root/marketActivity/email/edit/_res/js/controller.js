var app = angular.module('summeryEdit', ['toastr']);
app.controller('emailEditCtrl', function($scope, emailSer,$state,toastr,$stateParams){
    var emaiId = {id : $stateParams.id};
    //获取值
    emailSer.getFourById(emaiId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });

    $scope.selectTpye = function(val){
        var data = {type:val}
        //获取所有项目组
        emailSer.allProject(data).then(function(response){
            if(response.data.code == 0){
                $scope.allProjects = response.data.data;
            }else {
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    }
    
    $scope.objLists = [];//对象列表
    $scope.emails = ['个人邮箱','公邮','自由录入'];
    $scope.addMail = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };
    $scope.dbSend = function (index) {//双击删除
        $scope.objLists.splice(index,1);
    }

    //提交
    $scope.emailEditFun = function(){
        var data = $scope.data;
        data.startTime = angular.element('.startTime').val();
        data.endTime = angular.element('.endTime').val();
        data.id = $stateParams.id;
        data.emails = $scope.objLists;
        emailSer.editEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.email.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        }) 
    };
    
});

