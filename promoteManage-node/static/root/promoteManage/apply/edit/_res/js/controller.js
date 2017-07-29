var app = angular.module('applyEdit', ['toastr']);
app.controller('applyEditCtrl', function($scope, applySer,$stateParams,$state,toastr){
    var applyData ={id: $stateParams.id};

    applySer.getSystem().then(function(response){//查找所有体系
        if(response.data.code == 0){
            $scope.allSystem = response.data.data;
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
    //获取ID
    applySer.findapplyId(applyData).then(function(response){
        if(response.data.code==0){
            $scope.classChange(response.data.data.classification);
            $scope.directionChange(response.data.data.classification,response.data.data.direction);
            $scope.apply = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.applyEditFun = function(){
        $scope.apply.applyDate = angular.element('.time').val();
        applySer.editapply($scope.apply).then(function(response){
            if(response.data.code == 0){
                $state.go('root.promoteManage.apply.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





