var app = angular.module('affairSelect', ['toastr','ipCookie']);
app.controller('affairSelectCtrl', function($scope,$state,toastr,affairSer){

    $scope.classDay = function(){
        affairSer.selectAff($scope.vm).then(function(response){
            if(response.data.code == 0){
                $scope.edit = response.data.data;
                for(var i = 0; i < $scope.edit.length; i++){
                    var val = $scope.edit[i];
                    var o = {};
                    o.title = val.content;
                    o.start = val.time;
                    o.id = i;
                    //第二次渲染
                    $('#calendar').fullCalendar('renderEvent', o, true);
                }
                /*  $('#calendar').fullCalendar('destroy');*/
               /* var event ={events:$scope.info};*/
                /*  $('#calendar').fullCalendar( 'refetchEventSources', event )*/
                /* $('#calendar').fullCalendar('rerenderEvents');
                $('#calendar').fullCalendar('renderEvent', event, true);*/

            }
        });
    }

});

app.directive('justYeas', function() {
    return {
        require: '?ngModel',
        restrict: 'A',
        scope: {
            ngModel: '=',
            val:'=',
        },
        link: function(scope, element, attr,ngModel) {
            $(document).ready(function() {

                    $('#calendar').fullCalendar({
                        header : {
                            left : 'prev,next today',
                            center : 'title',
                            right : 'month'
                        },
                        weekends : true,
                        weekMode : 'liquid',
                        defaultView : 'month',
                        allDayText : '全天',
                        businessHours : true,
                        defaultEventMinutes : 120,
                        eventLimit : true,
                        dayClick : function(date){
                        },
                        //设置是否可被单击或者拖动选择
                        selectable : true,
                        //点击或者拖动选择时，是否显示时间范围的提示信息，该属性只在agenda视图里可用
                        selectHelper : true,
                        //点击或者拖动选中之后，点击日历外的空白区域是否取消选中状态 true为取消 false为不取消，只有重新选择时才会取消
                        unselectAuto : true,
                        //Event是否可被拖动或者拖拽
                        editable : false,
                        //Event被拖动时的不透明度
                        dragOpacity : 0.5,
                        events : scope.val
                    });

            });
        }
    }
})

