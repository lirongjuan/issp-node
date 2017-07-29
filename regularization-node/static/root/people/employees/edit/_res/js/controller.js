var app = angular.module('employEdit', ['toastr']);
app.controller('employEditCtrl', function($scope, employSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};
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
    //获取ID
    employSer.employId(webData).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.empEditFun = function(){
        var vm = $scope;
        vm.data.gender = angular.element('.gender').val();
        vm.data.hiredate = angular.element('.hiredate').val();
        vm.data.posCriteriaConfirmed = angular.element('.posCriteriaConfirmed').val();
        employSer.employEdit(vm.data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.people.employees.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





