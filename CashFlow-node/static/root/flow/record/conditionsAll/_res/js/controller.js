var app = angular.module('recordConditionsAll', ['toastr']);
app.controller('recordConditionsAllCtrl', function($scope, recordSer,toastr){
    // $scope.showed=true;
    // 地区
    recordSer.areas().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
           
        }
    });
    // 项目名称
    recordSer.projects().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
            
        }
    });
    // 项目组
    recordSer.projectGroups().then(function(response){
        if(response.data.code == 0){
            $scope.projectGroups = response.data.data;
            
        }
    });
    //查询事件
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            year:data.year,
            month:data.month,
            area:data.area,
            projectGroup:data.projectGroup,
            project:data.project
        };
        recordSer.moneyConditionsAll(data.sum).then(function(response){
            
            if(response.data.code == 0){
                $scope.recordLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




