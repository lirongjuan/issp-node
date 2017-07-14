var app = angular.module('summaryAnaly', ['ng-pagination','toastr','angularjs-dropdown-multiselect']);
app.controller('summaryAnalyCtrl',function($scope,summarySer,toastr){

    summarySer.listAccount().then(function(response){
        if(response.data.code==0){
            $scope.workOptions=response.data.data;
           /* $scope.word=$scope.accounts[1].id;*/
            /*var bankId={id:$scope.bank};*/
        }
    });
    $scope.positions = [];
    $scope.stringSettings = {displayProp: 'name',idProperty: 'id'};
    $scope.Anfn =function(){
        var permitArr=[];
        if($scope.selectAn){
        angular.forEach($scope.positions,function(item){
            permitArr.push(item.id)
        });
        $scope.selectAn.accountIds=permitArr.join(',');
            summarySer.analyselistInfo($scope.selectAn).then(function(response){
                if(response.data.code == 0){
                    $scope.infoLists = response.data.data;
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });

            $scope.selectList = function(event){
                angular.forEach($scope.infoLists, function(obj){
                    obj._selectList = false
                });
                event._selectList = true;
                //向父Ctrl传递事件
                $scope.$emit('changeId', event.id);
            };
            //点击更多详细
            $scope.moreList = function(event){
                angular.forEach($scope.infoLists,function(obj){
                    if(event.id!==obj.id){
                        obj._moreList = false
                    }
                });
                event._moreList = !event._moreList;
            };
        }else{
            toastr.info("请把信息补充完整！", '温馨提示');
        }
    }
    //导出
    $scope.CollectSum=function(){
        if($scope.selectAn){
            var permitArr = [];
            angular.forEach($scope.positions, function(item){
                permitArr.push(item.id)
            });
            $scope.selectAn.accountIds = permitArr.join(',');
            window.open(`http://localhost:9998/collect/analyze/export${encode($scope.selectAn, true)}`);
        }else{
            toastr.info("请把信息补充完整！", '温馨提示');
        }
    }
});

function encode(){
    var obj = arguments[0];
    var contacat = false;
    if (arguments[1]) {
        contacat = true;
    }
    var str = '';
    var count = 0;
    for (var name in obj) {
        if (obj[name]&&( typeof obj[name]) != 'function') {
            str += (((contacat && count == 0) ? '?' : '&') + name + '=' + obj[name]);
            count++;
        }
    }
    return encodeURI(str);
}