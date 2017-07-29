var app = angular.module('billRecordsList', ['ng-pagination','toastr']);
app.controller('billRecordsListCtrl',function($scope,billRecordsSer,toastr,$location){

    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        billRecordsSer.listBillRecords(listData).then(function(response){
            if(response.data.code==0){
                $scope.recordsLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }

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

    billRecordsSer.countBillRecords().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

});

