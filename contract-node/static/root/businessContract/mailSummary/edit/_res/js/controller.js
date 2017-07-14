var app = angular.module('mailSummaryEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('mailSummaryEditCtrl', function($scope, emailSer,$stateParams,$state,toastr){
    var emailData ={id: $stateParams.id};

    //获取ID
    emailSer.findEmailId(emailData).then(function(response){
        if(response.data.code==0){
            $scope.editMail = response.data.data;
            $scope.condis = $scope.editMail.condi.split(',');
            $scope.objLists = $scope.editMail.sendObject.split(';');
            $scope.condis.reUndefined();
            $scope.objLists.reUndefined();
            $scope.sendCondition($scope.editMail.type,false)
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });
    $scope.condis= [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取所有汇总
    $scope.objLists = [];
    $scope.sendCondition = function(val,bol){
        if(val){
            var data = {type:val};
            if(data.type == '合同签订与立项汇总'){
                emailSer.getSignArea(data).then(function(response){
                    if(response.data.code == 0){
                        $scope.collectAll = response.data.data;
                        if (bol) $scope.condis = [];
                    } else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
            }else if(data.type == '项目合同基本信息汇总'){

                emailSer.getBasicArea(data).then(function(response){
                    if(response.data.code == 0){
                        $scope.collectAll = response.data.data;
                        if (bol) $scope.condis = [];
                    } else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
            }else if(data.type == '派工单信息汇总'){
                emailSer.getDispatchArea(data).then(function(response){
                    if(response.data.code == 0){
                        $scope.collectAll = response.data.data;
                        if (bol) $scope.condis = [];
                    } else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
            }

        }else {
            $scope.collectAll = null;
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
                $state.go('root.businessContract.mailSummary.list[12]');
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





