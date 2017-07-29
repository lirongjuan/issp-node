var app = angular.module('activityList', ['ng-pagination','toastr']);
app.controller('activityListCtrl',function($scope,activitySer,toastr,$stateParams){
    $scope.$emit('changeId', null);
    //分页
    $scope.pagination = {
        itemsCount: 2,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page||1
        };
        activitySer.listActivity(pages).then(function(response){
            if(response.data.code==0){
                $scope.activityLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.moreList = function(event){
        angular.forEach($scope.activityLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    activitySer.countActivity().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});


