var app = angular.module('refundErrList', ['ng-pagination','toastr']);
app.controller('refundErrListCtrl',function($scope,refundErrSer,toastr,$stateParams,$state,$location) {
     $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    //获取搜索字段
    $scope.reimer = $stateParams.reimer?$stateParams.reimer:'';
    $scope.reimNumber = $stateParams.reimNumber?$stateParams.reimNumber:'';
    $scope.startTime = $stateParams.startTime?$stateParams.startTime:'';
    $scope.endTime = $stateParams.endTime?$stateParams.endTime:'';
    if($stateParams.reimer || $stateParams.reimNumber || $stateParams.startTime || $stateParams.endTime){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.refundErrLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page', $location.search().page);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.refundErrLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //搜索
    $scope.search = function(){
        var startTime =$scope.startTime || angular.element('.startTime').val();
        var endTime =$scope.endTime || angular.element('.endTime').val();
        $state.go('root.borrowRefund.refundManage.refundErr.list[12]',{reimer:$scope.reimer,reimNumber:$scope.reimNumber,page:1,startTime:startTime,endTime: endTime});
    }

    function activatePage(page) {
        var startTime = angular.element('.startTime').val();
        var endTime = angular.element('.endTime').val();
        var listData = {
            page:page || 1,
            reimer:$scope.reimer || " ",
            reimNumber:$scope.reimNumber || " ",
            startTime:startTime || " " ,
            endTime: endTime || " "
        }
        refundErrSer.allCount(listData).then(function(response){
            if(response.data.code==0){
                $scope.abili.itemsCount = response.data.data;
                $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        refundErrSer.allList(listData).then(function(response){
            if(response.data.code==0){
                $scope.refundErrLists = response.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.refundErrLists.data,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    $scope.titles = ['报销人','报销开始时间','报销单号','报销结束时间'];
});
