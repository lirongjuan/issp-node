var app = angular.module('firstsubjectEdit', ['toastr']);
app.controller('accountEditCtrl', function($scope, accountSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    accountSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            $scope.firstFn($scope.data.firstSubject);
            $scope.scondFn($scope.data.secondSubject);
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
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


    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        data.id = companyId.id;
        accountSer.marketserveapplyEdit1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.initialize.sort.account.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    
});
   