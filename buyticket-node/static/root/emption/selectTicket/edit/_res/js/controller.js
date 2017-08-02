var app = angular.module('basicInfoEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('selectTicketEditCtrl', function($scope,$state,$stateParams,toastr,selectTicketSer){
    var getId = {id:$stateParams.id};

    selectTicketSer.getSelect(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的用户
    selectTicketSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取所有的地区
    selectTicketSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    selectTicketSer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的购票原因
    selectTicketSer.getCauseAll().then(function (response){
        if (response.data.code==0){
            $scope.cause=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的车票类型
    selectTicketSer.getTypeAll().then(function (response){
        if (response.data.code==0){
            $scope.type=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的购买方式
    selectTicketSer.getPatternAll().then(function (response){
        if (response.data.code==0){
            $scope.pattern=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.selectEditFun = function(){
        $scope.edit.planDepartureTime= angular.element('.onetime').val();
        $scope.edit.planArrivalTime = angular.element('.twotime').val();
        $scope.edit.buyTime = angular.element('.threetime').val();
        $scope.edit.departureTime = angular.element('.fourtime').val();
        $scope.edit.arrivalTime = angular.element('.fivetime').val();
        $scope.edit.confirmInfoTime = angular.element('.sixtime').val();
        selectTicketSer.editSelect($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.emption.basicInfo.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





