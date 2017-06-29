var app = angular.module('emailEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailEditCtrl', function($scope, emailSer,$stateParams,$state,toastr){
    var emailData ={id: $stateParams.id};

    //获取ID
    emailSer.emailId(emailData).then(function(response){

        if(response.data.code==0){
            $scope.editMail = response.data.data;
            // $scope.condis=$scope.editMail.condi
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });

    $scope.condis= [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    // $scope.stringSettings = {displayProp: 'value',idProperty: 'id'};
    //获取所有汇总
    $scope.objLists = [];
    $scope.sendCondition = function(val){
        if(val){
            var data = {type:val};
            if(data.type == '招标信息汇总'){
                emailSer.getCityInfo(data).then(function(response){

                    if(response.data.code == 0){
                        $scope.workOptions = response.data.data;
                    } else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
            }else if(data.type == '开标信息汇总'){

                emailSer.getCityOpen(data).then(function(response){
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
    //编辑点击提交
    $scope.emailEditFun = function(){
        var vm = $scope;
        vm.editMail.condis = $scope.condis;
        vm.editMail.sendObjectList = $scope.objLists;
        emailSer.editEmail(vm.editMail).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.email.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }
});





