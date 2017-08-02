var app = angular.module('applicationEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('applicationEditCtrl', function($scope,$state,$stateParams,toastr,applicationSer){
    var getId = {id:$stateParams.id};
    applicationSer.getApp(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的用户
    applicationSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data;
            $scope.positions = $scope.edit.passenger.split(",");
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取所有的地区
    applicationSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    applicationSer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的购票原因
    applicationSer.getCauseAll().then(function (response){
        if (response.data.code==0){
            $scope.cause=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的车票类型
    applicationSer.getTypeAll().then(function (response){
        if (response.data.code==0){
            $scope.type=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的购买方式
    applicationSer.getPatternAll().then(function (response){
        if (response.data.code==0){
            $scope.pattern=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.positions = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};

    $scope.appEditFun = function(){
        var permitArr = [];
        if($scope.edit){
            angular.forEach($scope.positions, function(item){
                permitArr.push(item)
            });
            $scope.edit.passenger = permitArr.join(',');
            $scope.edit.planDepartureTime = angular.element('.onetime').val();
            $scope.edit.planArrivalTime = angular.element('.twotime').val();
            applicationSer.editApp($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.emption.application.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
        }
    };
});





