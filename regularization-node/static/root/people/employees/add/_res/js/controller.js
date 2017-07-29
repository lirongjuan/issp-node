var app = angular.module('employAdd', ['toastr']);
app.controller('employAddCtrl', function ($scope, employSer, $state, toastr) {
    //获取姓名
    employSer.employAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.names = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取地区
    employSer.employGitArea().then(function(response){
        if(response.data.code==0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取项目组
    employSer.employAllOrageDepartment().then(function(response){
        if(response.data.code==0){
            $scope.projectGroups = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取岗位
    employSer.employGitLeave().then(function(response){
        if(response.data.code==0){
            $scope.posts = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取决策层
    employSer.employAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.decisionLevels = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取规划模块
    employSer.employAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.planModules = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取预算模块
    employSer.employAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.budgetModules = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取总经办
    employSer.employAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.gmOffices = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.empAddFun = function () {
        var vm = $scope;
        vm.data.gender = angular.element('.gender').val();
        vm.data.hiredate = angular.element('.hiredate').val();
        vm.data.posCriteriaConfirmed = angular.element('.posCriteriaConfirmed').val();
        employSer.employAdd(vm.data).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.people.employees.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




