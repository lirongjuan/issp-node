var app = angular.module('summaryList', ['ng-pagination','toastr','angularjs-dropdown-multiselect']);
app.controller('summaryListCtrl',function($scope,summarySer,toastr){

     summarySer.listAccount().then(function(response){
         if(response.data.code==0){
             $scope.workOptions=response.data.data;
           /*  $scope.bank=$scope.accounts[1].id;*/
           /*  var bankId={id:$scope.bank};
             summarySer.bankSelf(bankId).then(function(response){
               if(response.data.code ==0){
                     $scope.infoLists2 = response.data.data;
                 }else{
                     toastr.error(response.data.msg, '温馨提示');
                 }
             });*/
            /* $scope.selectList2 = function(event){
                 angular.forEach($scope.infoLists2, function(obj){
                     obj._selectList2 = false
                 });
                 event._selectList2 = true;
                 //向父Ctrl传递事件
                 $scope.$emit('changeId', event.id);
             };*/
         }
     });
     $scope.bankSel=function(event){
     var bankId={id:event};
     summarySer.bankSelf(bankId).then(function(response){
         if(response.data.code==0){
             $scope.infoLists2 = response.data.data;
         }else{
             toastr.error(response.data.msg, '温馨提示');
         }
     });
         $scope.selectList2 = function(event){
             angular.forEach($scope.infoLists2, function(obj){
                 obj._selectList2 = false
             });
             event._selectList2 = true;
             //向父Ctrl传递事件
             $scope.$emit('changeId', event.id);
         };
     };

    $scope.positions = [];
    $scope.stringSettings = {displayProp: 'name',idProperty: 'id'};
     $scope.fn = function(){
         if($scope.selectAn){
         var permitArr=[];
         angular.forEach($scope.positions,function(item){
             permitArr.push(item.id)
         });
         $scope.selectAn.accountIds=permitArr.join(',');
         $scope.selectAn.name = null;
         summarySer.collectlistInfo($scope.selectAn).then(function(response){
             if(response.data.code == 0){
                 $scope.infoLists = response.data.data;
             } else {
                 toastr.error(response.data.msg, '温馨提示');
             }
         });
           $scope.selectList= function(event){
                 angular.forEach($scope.infoLists, function(obj){
                  obj._selectList = false
                  });
                  event._selectList = true;
                  //向父Ctrl传递事件
                  $scope.$emit('changeId', event.id);
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
            $scope.selectAn.name = null;
            window.open(`http://localhost:9998/collect/collect/export${encode($scope.selectAn, true)}`);
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