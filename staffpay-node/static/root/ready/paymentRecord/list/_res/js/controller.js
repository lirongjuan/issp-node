var app = angular.module('paymentRecordList', ['ng-pagination','toastr']);
app.controller('paymentRecordListCtrl',function($scope,paymentRecordSer,toastr,$stateParams,$state){

    $scope.$emit('changeId', null);

     $scope.selectList = function(event){
        angular.forEach($scope.basicinfoLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('page', $stateParams.page);
    };

    $scope.moreList = function(event){
        angular.forEach($scope.basicinfoLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    //分页
    $scope.pagination = {
        itemsCount: 11,  //总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    function activatePage(page) {
        var pages = {
            page:page||1
        };
        paymentRecordSer.listpayment(pages).then(function(response){
            if(response.data.code==0){
                $scope.basicinfoLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.basicinfoLists, function(obj){
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
    paymentRecordSer.countpayment().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.basicinfoLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

    //--------------------------------------------------------
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.ready.paymentRecord.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        paymentRecordSer.deletepayment(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.pagination.itemsCount-count)%10){
                    $state.go('root.ready.paymentRecord.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.ready.paymentRecord.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

});


