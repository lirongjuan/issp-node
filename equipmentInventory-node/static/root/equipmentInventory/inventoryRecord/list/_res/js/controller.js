var app = angular.module('recordListM', ['ng-pagination','toastr']);
app.controller('recordListCtrl',function($scope,inRecordSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    function activatePage() {
            $scope.custom = {
                itemsCount: 2, //总条数
                take: 10, //每页显示
                activatePage: activatePage
            };
            inRecordSer.countRecord().then(function (response) {
                if(response.data.code==0){
                    $scope.custom.itemsCount = response.data.data;
                    $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
            inRecordSer.recordList().then(function(response){
                if(response.data.code == 0){
                    $scope.recordLists = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
    }
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.recordLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    $scope.selectList = function(event){
        angular.forEach($scope.recordLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);
    };
});

