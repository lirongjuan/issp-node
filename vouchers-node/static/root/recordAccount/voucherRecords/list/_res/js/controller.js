var app = angular.module('voucherRecordsList', ['ng-pagination','toastr']);
app.controller('voucherRecordsListCtrl',function($scope,voucherRecordsSer,toastr,$location){

    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        voucherRecordsSer.listVoucherRecords(listData).then(function(response){
            if(response.data.code==0){
                $scope.recordsLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    //选择
    $scope.selectList = function(event){
        angular.forEach($scope.recordsLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.recordsLists,function(obj){
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

    voucherRecordsSer.countVoucherRecords().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

});

