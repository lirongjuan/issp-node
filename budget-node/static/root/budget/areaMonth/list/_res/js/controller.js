var app = angular.module('areaMonthList', ['ng-pagination','toastr']);
app.controller('areaMonthListCtrl',function($scope,areaMonthSer,toastr,$location){
    $scope.$emit('changeId', null);
    $scope.selectList = function(event){
        angular.forEach($scope.areaMonthLists,function(obj){
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
        areaMonthSer.listAreaMonth(pages).then(function(response){
            if(response.data.code==0){
                $scope.areaMonthLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.moreList = function(event){
        angular.forEach($scope.areaMonthLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    areaMonthSer.countAreaMonth().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
      });

    areaMonthSer.warningCostProjects().then(function(response){
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


