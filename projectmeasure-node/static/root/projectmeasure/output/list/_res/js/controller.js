var app = angular.module('outputList', ['ng-pagination','toastr']);
app.controller('outputListCtrl',function($scope,outputSer,toastr,$stateParams,$state) {
    
    //选择
    $scope.selectList = function(event){
        angular.forEach($scope.marketserveLists.data,function(obj){
            obj._selectList = false;
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.marketserveLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    function activatePage(page) {
        var listData = {
            page:page || 1
        }
        outputSer.listSummary(listData).then(function(response){
            if(response.data.code==0){
                $scope.marketserveLists = response.data;
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
    outputSer.countBaseInfo().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
});
