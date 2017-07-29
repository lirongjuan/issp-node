var app = angular.module('time', ['toastr']);
app.controller('timeCtrl', function($scope, detailSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    $scope.listNames = {};
    //获取ID
    detailSer.findDetailId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    $scope.myFunc = function() {
        var auditTime={
            auditTime:$scope.auditTime
        };
        detailSer.allAuditTime(auditTime).then(function(response){
            if(response.data.code == 0){
                $scope.listNames = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.myFunc2 = function() {
        var planTime={
            planTime:$scope.listNames.planTime
        };
        detailSer.allPlanTime(planTime).then(function(response){
            if(response.data.code == 0){
               var a = response.data.data;
                for(key in a){
                    for(b in $scope.listNames){
                        if(key == b){
                            $scope.listNames[b] = a[key];
                        }
                    }
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.myFunc3 = function() {
        var countTime={
            countTime:$scope.listNames.countTime
        };
        detailSer.allERPTime(countTime).then(function(response){
            if(response.data.code == 0){
                var a = response.data.data;
                for(key in a){
                    for(b in $scope.listNames){
                        if(key == b){
                            $scope.listNames[b] = a[key];
                        }
                    }
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.myFunc4= function() {
        var billTime={
            billTime:$scope.listNames.billTime
        };
        detailSer.allBillTime(billTime).then(function(response){
            if(response.data.code == 0){
                var a = response.data.data;
                for(key in a){
                    for(b in $scope.listNames){
                        if(key == b){
                            $scope.listNames[b] = a[key];
                        }
                    }
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.settlementEditFun = function(){
        var vm = $scope;
          detailSer.editTime(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $scope.listNames = response.data.data;
                $state.go('root.payment.detail.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };

});
app.directive('defLaydate', function() {
    return {
        require: '?ngModel',
        restrict: 'A',
        scope: {
            ngModel: '=',
            ngCh:'&'
        },
        link: function(scope, element, attr, ngModel) {
            var _date = null,_config={};

            // 初始化参数
            _config = {
                elem: '#' + attr.id,
                format: attr.format != undefined && attr.format != '' ? attr.format : 'YYYY-MM-DD',
                max:attr.hasOwnProperty('maxDate')?attr.maxDate:'',
                min:attr.hasOwnProperty('minDate')?attr.minDate:'',
                choose: function(data) {
                    scope.$apply(setViewValue);
                },
                clear:function(){
                    ngModel.$setViewValue(null);
                }
            };
            // 初始化
            _date= laydate(_config);
            // 模型值同步到视图上
            ngModel.$render = function() {
                element.val(ngModel.$viewValue || '');
            };
            // 监听元素上的事件
            element.on('blur keyup change', function() {
                scope.$apply(setViewValue);
            });

            setViewValue();

            // 更新模型上的视图值
            function setViewValue() {
                var val = element.val();
                ngModel.$setViewValue(val);
                scope.ngCh();
            }
        }
    }
})


