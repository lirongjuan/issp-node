var app = angular.module('socialListBasic', ['toastr','ng-pagination']);
app.controller('socialListBasicCtrl', function($scope, selfcapSer,$state,toastr,$stateParams,$location){
   /* $scope.$emit('changeSocialListId', null);*/
    //获取id
    if($stateParams.subId){
        switch ($stateParams.name){
            case 'socialDelete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){
        $scope.delShow = false;
        $state.go('root.ability.selfcap.socialList[12]',{subId:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.subId
        };
        selfcapSer.deleteSocialSelf(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
               /* $scope.$emit('changeSocialListId', null);*/
                $scope.delShow = false;
                if(($scope.abili2.itemsCount-count)%10){
                    $state.go('root.ability.selfcap.socialList[12]',{subId:null,name:null});
                }else{
                    $state.go('root.ability.selfcap.socialList[12]',{subId:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
       $scope.selectList = function(event){

        angular.forEach($scope.socialListBasics.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idSocialList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeSocialListId', event.id);
        $scope.$emit('page',$location.search().page);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.socialListBasics.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //分页
    $scope.abili2 = {
        itemsCount: 2,//总条数
        take: 10,        //每页显示
        activatePage: activatePage, //当前页
    };
    selfcapSer.countSocial().then(function (response) {
        if(response.data.code==0){
            $scope.abili2.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    function activatePage(page) {
        var listData2 = {
            page: page||1,
            id:$stateParams.id
        };
        selfcapSer.listSocialSelf(listData2).then(function (response) {
            if (response.data.code == 0) {
                $scope.socialListBasics = response.data;
                if ($stateParams.subId) {
                    if ($stateParams.subId.indexOf('&')) {
                        $stateParams.subId = $stateParams.subId.split('&')[0];
                    }

                    angular.forEach($scope.socialListBasics.data, function (obj) {
                        if (obj.id == $stateParams.subId.split('&')[0]) {
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeSocialListId', $stateParams.subId);
                }
               }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }

});