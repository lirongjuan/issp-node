var app = angular.module('settingEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('settingEditCtrl', function($scope, settingSer, $state,$stateParams,toastr,ipCookie,$location){

    $scope.getId = {id:$stateParams.id};
    settingSer.getpermit($scope.getId).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
            $scope.positions=$scope.edit.cusOperateVO
        }
    });

    $scope.positions = [];
    $scope.stringSettings = {displayProp: 'value',idProperty: 'id'};
    settingSer.getListpermit($scope.getId).then(function(response){
        if(response.data.code==0){
            $scope.workOptions= response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });



    $scope.editSetting = function(){
        var permitArr=[];
        angular.forEach($scope.positions,function(item){
            permitArr.push(item.id)
        });
        $scope.edit.operators=permitArr.join(',');
        $scope.edit.operator = null;
        settingSer.editSetting($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.incomeAccount.setting.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    }

});





