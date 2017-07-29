var app = angular.module('mmui', [{
    files:[
        "root/projectmeasure/interface/mmui/_res/js/service.js"
    ]
}]);
app.controller('mmuiCtrl',function ($scope,$state) {
    if ($state.current.url == '/mmui') {//默认加载列表
        $state.go('root.projectmeasure.interface.mmui.list[12]');
    }
}).controller('mmuiMenuCtrl',function($scope,$state,$rootScope,$location,mmuiSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新

        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){

            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        mmuiSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.projectmeasure.interface.mmui.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.projectmeasure.interface.mmui.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = ''
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = ""
    };
});
//设置自定义过滤器
app.filter('cover',function(){
    var result;
    return function(val){
        switch(val){
            case 'SINGLE_MULTIPLE':
                result = "单个项目多个界面"
                break;
            case 'SINGLE_SINGLE':
                result = "单个项单个界面"
                break;
            case 'MULTIPLE_SINGLE':
                result = "多个项目单个界面"
                break;
            case 'MULTIPLE_MULTIPLE':
                result = "多个项目多个界面"
                break;
            case '':
                result = "请选择项目类别"
                break;
             case 'CONSTRUCTION':
                result = "施工"
                break;
            case 'DESIGN':
                result = "设计"
                break;
            case 'SUPERVISE':
                result = "督导"
                break;
            case 'SOLUTION_PROVIDER':
                result = "方案提供"
                break;
            case 'CONTROL':
                result = "监理"
                break;
            case 'interfaceSelect':
                result = "请选择界面"
                break;
        }
        return result;
    }
})
