var app = angular.module('applicationAdd', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('applicationAddCtrl', function($scope,$state,toastr,applicationSer){
    //获取所有的用户
    applicationSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
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

    $scope.fn = function(){
        if($scope.add.sendEmail){
            var info = $scope.add.sendEmail;
            console.log(info);
        }
    }
    $scope.appAddFun = function(){
        var permitArr = [];
        if($scope.add){
            angular.forEach($scope.positions, function(item){
                permitArr.push(item)
            });
            $scope.add.passenger = permitArr.join(',');
            $scope.add.planDepartureTime = angular.element('.onetime').val();
            $scope.add.planArrivalTime = angular.element('.twotime').val();
            applicationSer.addApp($scope.add).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.emption.application.list[12]');
                    toastr.success("已成功添加", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        }
    };
});


