var app = angular.module('settingList', ['ng-pagination','toastr']);
app.controller('settingListCtrl',function($scope,settingSer,toastr){
    $scope.$emit('changeId', null);
    //分页
    $scope.pagination = {
        itemsCount: 11,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page
        };
        settingSer.listSetting(pages).then(function(response){
            if(response.data.code==0){
                $scope.settingLists = response.data.data;
                $scope.operators = response.data.data.cusOperateVO
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    settingSer.countSetting().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.selectList = function(event){
        angular.forEach($scope.settingLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
    }

});


