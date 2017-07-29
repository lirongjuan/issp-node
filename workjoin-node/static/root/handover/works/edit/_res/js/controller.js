var app = angular.module('worksEdit', ['toastr']);
app.controller('worksEditCtrl', function($scope, worksSer,$state,toastr,$stateParams,$filter){
    var worksId = {id : $stateParams.id};
    //获取值
    worksSer.worksId(worksId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.worksEditFun = function(){
        var d1 =  angular.element('.time1').val();
        var d2 =  angular.element('.time2').val();
        var t1 =  angular.element('.yon1').val();
        var t2 =  angular.element('.yon2').val();
        var t3 =  angular.element('.yon3').val();
        var t4 =  angular.element('.yon4').val();
        var t5 =  angular.element('.yon5').val();
        var t6 =  angular.element('.yon6').val();
        var data = $scope.data;
        data.workJoinStartTime=d1;
        data.workJoinendTime=d2;
        data.jobs=t1;
        data.workJoinCause=t2;
        data.workPermission=t3;
        data.heir=t4;
        data.inheritor=t5;
        data.head=t6;
        worksSer.worksEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.works.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});