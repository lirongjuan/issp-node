var app = angular.module('recieveTicketList', ['ng-pagination','toastr']);
app.controller('recieveTicketListCtrl',function($scope,recieveTicketSer,toastr,$stateParams,$state,$location) {
    $scope.$emit('changeId', null);
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.recieveTicketLists.data,function(obj){
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
        angular.forEach($scope.recieveTicketLists.data,function(obj){
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
        recieveTicketSer.allList(listData).then(function(response){
            if(response.data.code==0){
                $scope.recieveTicketLists = response.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.recieveTicketLists.data,function(obj){
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
    recieveTicketSer.allCount().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
});
//自定义过滤器
app.filter('cover',function(){
    return function(val){
        var result;
        switch (val){
            case 'CHARGEPASS':
                result = '负责人审核通过';
                break;
            case 'NONE':
                result = '未处理';
                break;
            case 'CHARGENOTPASS':
                result = '负责人审核不通过';
                break;
            case 'FINACEPASS':
                result = '财务运营审核通过';
                break;
            case 'FINACENOTPASS':
                result = '财务运营审核不通过';
                break;
            case 'FINACECONGEL':
                result = '财务运营冻结';
                break;
            case 'CHARGESURECONGEL':
                result = '负责人确认冻结';
                break;
            case 'MANAGEPASS':
                result = '总经办审核通过';
                break;
            case 'MANAGENOTPASS':
                result = '总经办审核不通过';
                break;
            case 'LISTERROR':
                result = '申请单有误';
                break;
        }
        return result;
    }
})