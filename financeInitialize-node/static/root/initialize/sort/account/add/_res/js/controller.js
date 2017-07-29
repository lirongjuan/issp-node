var app = angular.module('firstsubjectAdd', ['toastr']);
app.controller('accountAddCtrl', function($scope, accountSer,$state,toastr){
    //获取一级列表
    accountSer.allFirstsubject().then(function(response){
        if(response.data.code == 0){
                $scope.firstList = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
    })
    //获取二级列表
    function secondSub(data){
        $scope.secondList = [];
        var secondData = {
            firstSubject:data
        }
        accountSer.SecondList(secondData).then(function(response){
            if(response.data.code == 0){
                    $scope.secondList = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            })
    }
    $scope.firstFn = function(data){
        secondSub(data);
    }
    //获取三级列表
    function thirdSub(data){
        $scope.thirdList = [];
        var ThirdData = {
            firstSubject:data.firstSubject,
            secondSubject:data.secondSubject
        }
        accountSer.ThirdList(ThirdData).then(function(response){
            if(response.data.code == 0){
                    $scope.thirdList = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            })
    }
    $scope.scondFn = function(val){
        var scondData = {
            firstSubject:$scope.data.firstSubject,
            secondSubject:$scope.data.secondSubject
        };
        thirdSub(scondData);
    }
    //添加
    $scope.companyAddFun = function(){
        $scope.data.startTime = angular.element('.startTiming').val();//计划时间
        var data = $scope.data;
        accountSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.initialize.sort.account.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});




