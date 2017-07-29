var app = angular.module('detailCollect', ['toastr','angularjs-dropdown-multiselect']);
app.controller('detailCollectCtrl', function($scope, detailSer,toastr,$state,$stateParams){
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.detailListfs,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.$on("socialListId", function(event, suId){
        $scope.idSocialList = suId;
    });
    //选择
    $scope.$emit('changeSocialListId', null);
    $scope.selectList = function(event){
        angular.forEach($scope.summaryListDetails,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idSocialList = event.remark;
        //向父Ctrl传递事件
        $scope.$emit('changeSocialListId',$scope.idSocialList);
    };
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    detailSer.listSummaryArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        detailSer.summaryDetails($scope.areas).then(function(response){
            if(response.data.code == 0){
                $scope.summaryListDetails = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        })
    }};

    $scope.$on("socialListId", function(event, suId){
        $scope.idSocialList = suId;
    });
    $scope.showFace = function(){
        if($scope.idSocialList){
            console.log($scope.idSocialList)
            $state.go('root.payment.detail.collect[12]',{suId:$scope.idSocialList,name:'showFace'});
        }
    };
    $scope.cancel = function(){
        $scope.delShow = false;
        $state.go('root.payment.detail.collect[12]',{suId:null,name:null});
    };
    //获取id
    if($stateParams.suId){
        switch ($stateParams.name){
            case 'showFace':
                $scope.delShow = true;
                break;
        }
    }
    var dataId = { id :$stateParams.suId};
    detailSer.listDetails(dataId).then(function(response){
        if(response.data.code==0){
            $scope.detailListfs = response.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
});



