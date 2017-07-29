var app = angular.module('gradelevelEdit', ['toastr']);
app.controller('gradelevelEditCtrl', function($scope, gradelevelSer,$stateParams,$state,toastr){
    var gradelevelData ={id: $stateParams.id};

    gradelevelSer.getSystem().then(function(response){//查找所有体系
        if(response.data.code == 0){
            $scope.allSystem = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    gradelevelSer.getClass().then(function(response){//查找所有分类
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
            gradelevelSer.getAllDirections(data).then(function(response){
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
            gradelevelSer.allSkillLevels(data).then(function(response){
                if(response.data.code == 0){
                    $scope.allSkillLevels = response.data.data;
                }else {
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        }
    }
    //获取ID
    gradelevelSer.findgradelevelId(gradelevelData).then(function(response){
        if(response.data.code==0){
            $scope.classChange(response.data.data.classification);
            $scope.directionChange(response.data.data.classification,response.data.data.direction);
            $scope.gradelevel = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.gradelevelEditFun = function(){
        gradelevelSer.editgradelevel($scope.gradelevel).then(function(response){
            if(response.data.code == 0){
                $state.go('root.promoteManage.gradelevel.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





