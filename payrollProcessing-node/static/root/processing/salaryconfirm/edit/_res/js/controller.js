var app = angular.module('salaryconfirmEdit', ['toastr']);
app.controller('salaryconfirmEditCtrl', function($scope, salaryconfirmSer,$state,toastr,$stateParams,$filter){
    var salaryconfirmId = {id : $stateParams.id};
    //获取值
    salaryconfirmSer.salaryconfirmFind(salaryconfirmId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //地区
    salaryconfirmSer.salaryconfirmAreas().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }
    });
    //部门
    salaryconfirmSer.salaryconfirmDepartments().then(function(response){
        if(response.data.code == 0){
            $scope.departments = response.data.data;
        }
    });
    //职位
    salaryconfirmSer.salaryconfirPositions().then(function(response){
        if(response.data.code == 0){
            $scope.positions = response.data.data;        }
    });

    //姓名
    salaryconfirmSer.salaryconfirmUsers().then(function(response){
        if(response.data.code == 0){
            $scope.users = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var data={username:$scope.users};
        salaryconfirmSer.salaryconfirmUsers(data).then(function(response){
            if(response.data.code == 0){
                $scope.numbers = response.data.data;
            }
        });
    };
    //提交
    $scope.salaryconfirmEditFun = function(){

        var t1 =  angular.element('.timeOne').val();
        var t2 =  angular.element('.timeTwo').val();
        var r =  angular.element('.yon').val();
        var data = $scope.data;
        data.salaryStart=t1;
        data.salaryEnd=t2;
        data.ratepaying=r;
        salaryconfirmSer.salaryconfirmEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.salaryconfirm.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});