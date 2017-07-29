var app = angular.module('applyAdd', ['toastr']);
app.controller('applyAddCtrl', function($scope, applySer,$state,toastr){


    applySer.getSystem().then(function(response){//查找所有体系
        if(response.data.code == 0){
            $scope.allSystem = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    applySer.allNum().then(function(response){//查找所有查找所有员工编号
        if(response.data.code == 0){
            $scope.allNum = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    applySer.getClass().then(function(response){//查找所有分类
        if(response.data.code == 0){
            $scope.allClass = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    
    //查找分类对应的所有管理方向
    $scope.classChange = function(val){
        if(val){
            var data = {classification:val};
            applySer.getAllDirections(data).then(function(response){
                if(response.data.code == 0){
                    $scope.allDirections = response.data.data;
                }else {
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        }
    }
    //查找分类对应的所有管理方向
    $scope.directionChange = function(val,val1){
        if(val){
            var data = {classification:val,direction:val1};
            applySer.allSkillLevels(data).then(function(response){
                if(response.data.code == 0){
                    $scope.allSkillLevels = response.data.data;
                }else {
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        }
    }
    //添加
    $scope.applyAddFun = function(){
        var data = $scope.apply;
        data.applyDate = angular.element('.time').val();
        applySer.addapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.promoteManage.apply.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

});




