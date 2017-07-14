var app = angular.module('bankbillList', ['ng-pagination','toastr',]);
app.controller('bankbillListCtrl',function($scope,bankbillSer,toastr,$stateParams,$state){
    $scope.$emit('changeId', null);
    if($stateParams.countId){
    $scope.a = $stateParams.countId
     }
    var pages = {
        page:1
    };
    bankbillSer.listInfo(pages).then(function(response){
        if(response.data.code==0){
            $scope.bankbillLists2 = response.data.data;
        }
    });
    $scope.moreList = function(event){
        angular.forEach($scope.bankbillLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.pagination = {
        itemsCount : 10,  //总条数
        take : 10,        //每页显示
        activatePage : activatePage
    };
    function activatePage(page){
        var pages = {
            page : page || 1,
            accountId : $scope.a || $stateParams.countId,
        }
        var accont = {accountId : $scope.a};
        bankbillSer.bankcountInfo(accont).then(function(response){
            if(response.data.code == 0){
                $scope.pagination.itemsCount = response.data.data;
                $scope.num = $stateParams.page * 10 > 10 ? ($stateParams.page - 1) * 10 : null;
            }
        });
        bankbillSer.listBankbill(pages).then(function(response){
            if(response.data.code == 0){
                $scope.bankbillLists = response.data.data;
                //循环分组
                $scope.arr = [];
                if($scope.bankbillLists){
                    var len = Math.ceil($scope.bankbillLists[0].detailList.length / 7);
                    for(var i = 0; i < len; i++){
                        var o = {};
                        o.a = i + 1;
                        $scope.arr.push(o);
                    }
                    if($stateParams.countId){
                        if($stateParams.countId.indexOf('&')){
                            $stateParams.countId = $stateParams.countId.split('&')[0];
                        }
                        angular.forEach($scope.bankbillLists, function(obj){
                            if(obj.id == $stateParams.id){
                                obj._selectList = true;
                            }
                        });
                        //向父Ctrl传递事件
                        $scope.$emit('changeId', $stateParams.id);
                    }
                }
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
        $scope.fn = function(){
            $scope.pagination = {
                itemsCount : 10,  //总条数
                take : 10,        //每页显示
                activatePage : activatePage
            };
            var pages = {
                page :  1,
                accountId : $scope.a,
            }
            var accont = {accountId : $scope.a};
            bankbillSer.bankcountInfo(accont).then(function(response){
                if(response.data.code == 0){
                    $scope.pagination.itemsCount = response.data.data;
                    $scope.num = $stateParams.page * 10 > 10 ? ($stateParams.page - 1) * 10 : null;
                }
            });
            bankbillSer.listBankbill(pages).then(function(response){

                if(response.data.code == 0){
                    $scope.bankbillLists = response.data.data;
                    //循环分组
                    $scope.arr = [];
                    if($scope.bankbillLists){
                        var len = Math.ceil($scope.bankbillLists[0].detailList.length / 7);
                        for(var i = 0; i < len; i++){
                            var o = {};
                            o.a = i + 1;
                            $scope.arr.push(o);
                        }
                        if($stateParams.id){
                            if($stateParams.id.indexOf('&')){
                                $stateParams.id = $stateParams.id.split('&')[0];
                            }
                            angular.forEach($scope.bankbillLists, function(obj){
                                if(obj.id == $stateParams.id){
                                    obj._selectList = true;
                                }

                            });
                            //向父Ctrl传递事件
                            $scope.$emit('changeId', $stateParams.id);
                        }
                    }
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });

        }

    $scope.selectList = function(event){
        angular.forEach($scope.bankbillLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.hasId = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('countId', $scope.a);
        $scope.$emit('page', $stateParams.page);
    };
     $scope.$on("deletedId",function(event,id){
        angular.forEach($scope.bankbillLists,function(item){
             if(item.id==id){
                 item._delete=true
             }
        })
     })
    //--------------------------------------------------------
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){ //取消删除
        $scope.delShow = false;
        $state.go('root.statement.bankbill.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        bankbillSer.delBankbill(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.pagination.itemsCount-count)%10){
                    $state.go('root.statement.bankbill.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.statement.bankbill.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

});


