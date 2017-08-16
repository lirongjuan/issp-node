var app = angular.module('paidList', ['ng-pagination','toastr']);
app.controller('paidListCtrl',function($scope,paidSer,toastr,$stateParams,$state){
    $scope.$emit('changeId', null);

    $scope.selectList = function(event){
        angular.forEach($scope.standardLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        ;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('page',$stateParams.page);
    };

    //分页
    $scope.pagination = {
        itemsCount: 3,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        if($scope.standardLists)return
        var pages = {
            page:page||1
        };
        paidSer.listPaid(pages).then(function(response){
            if(response.data.code==0){
                $scope.standardLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.standardLists,function(obj){
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
    $scope.moreList = function(event){
        angular.forEach($scope.standardLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    paidSer.countPaid().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.standardLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

})
;


