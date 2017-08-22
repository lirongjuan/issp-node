var app = angular.module('setTimeEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('setTimeEditCtrl', function($scope,$state,$stateParams,toastr,setTimeSer){
    var data = {
        name : $stateParams.name,
        permissions : $stateParams.permissions,
    };

    setTimeSer.getTime(data).then(function(response){
        if(response.data.code == 0){
            $scope.edit = response.data.data;
        }
    });

    $scope.timeEditFun = function(){
        $scope.edit.setTime= angular.element('.setTime').val();
        setTimeSer.editTime($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.dealt.setTime.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});

app.directive('justDate', function() {
    return {
        require: '?ngModel',
        restrict: 'A',
        scope: {
            ngModel: '=',
            val:'='
        },
        link: function(scope, element, attr, ngModel) {
            $("#mycolor").colorpicker({
                color: ngModel,
                defaultPalette: 'web',
                displayIndicator: true,
                history: true,
                showOn: "focus",
                strings: "Couleurs de themes,Couleurs de base,Plus de couleurs,Moins de couleurs",
                transparentColor: true,
            });

            $("#mycolor").on("mouseover.color", function(event, color){
                $('#title').attr("style", "background-color:" + color);
            })
        }
    }
})




