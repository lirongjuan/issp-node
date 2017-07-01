var app = angular.module('emailAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr){
    $scope.condis= [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取所有汇总
    $scope.objLists = [];
    $scope.sendCondition = function(val){
        if(val){
            var data = {type:val};
            if(data.type == '问题处理结果汇总'){
                
                emailSer.getCityInfo(data).then(function(response){
                    if(response.data.code == 0){
                        $scope.workOptions = response.data.data;
                    } else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
            }

        }else {
            $scope.workOptions = null;
        }
    };
    $scope.addMail = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };

    $scope.emails = ['个人邮箱','公邮','自由录入'];
    //添加
    $scope.EmailAddFun = function(){

        var vm = $scope;
        vm.addEmails.condis = $scope.condis;
        vm.addEmails.sendObjectList = $scope.objLists;
        emailSer.addEmail(vm.addEmails).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectProcessed.email.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }
});




