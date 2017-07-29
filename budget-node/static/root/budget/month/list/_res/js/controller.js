var app = angular.module('monthList', ['ng-pagination','toastr']);
app.controller('monthListCtrl',function($scope,monthSer,toastr,$location){
    $scope.$emit('changeId', null);
    $scope.selectList = function(event){
        angular.forEach($scope.monthLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('page', $location.search().page);
    };
    //分页
    $scope.pagination = {
        itemsCount: 2,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page
        };
        monthSer.listProMonth(pages).then(function(response){
            if(response.data.code==0){
                $scope.monthLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.moreList = function(event){
        angular.forEach($scope.monthLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    monthSer.countProMonth().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    monthSer.warningCostProjects().then(function(response){
        var sortArr=[];
        if(response.data.code == 0){
            $scope.warningData = response.data.data;
            angular.forEach($scope.warningData,function (item) {
                sortArr.push(item.warnValue);
            });
            $scope.maxNum=sortArr.sort(function (a,b) {
                return b-a
            })[0];
        }
    });
});


