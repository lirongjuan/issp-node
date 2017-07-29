var app = angular.module('handover', []);
app.controller('handoverCtrl', function ($scope,$state) {
    if ($state.current.url == '/handover') {//默认加载列表
         $state.go('root.handover.means');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='means';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'means';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
    //菜单导航
    angular.element('.big').click(function(){
        angular.element(this).siblings('h3').find('i').addClass('change-angle').end().next().hide();
        angular.element(this).next().toggle().end().find('i').toggleClass('change-angle');
    })
    angular.element('.big').eq(0).trigger("click");//添加一个默认点击事件
})

