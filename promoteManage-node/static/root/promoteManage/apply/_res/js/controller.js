var app = angular.module('apply', [{
    files:[
        "root/promoteManage/apply/_res/js/service.js",
    ]
}]);
app.controller('applyCtrl',function ($scope,$state) {
    if ($state.current.url == '/apply') {//默认加载列表
        $state.go('root.promoteManage.apply.list[12]')
    }
}).controller('applyMenuCtrl',function($scope,$state,$rootScope,$location,applySer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        applySer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    $scope.viewMore = function(){
        $scope.more = !$scope.more;
    }
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.promoteManage.apply.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.promoteManage.apply.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idListd = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    //查看排名
    $scope.rank = function(){
        $scope.menuClass = 'rankMenu';
        $scope.idListd = ''
    };
    //规划填写是否符合晋升条件
    $scope.conform = function(){
        if($scope.idListd){
            $state.go('root.promoteManage.apply.conform[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'conformMenu';
        }
    };
    //综合素养模块填写晋升标准达标数
    $scope.pManager = function(){
        if($scope.idListd){
            $state.go('root.promoteManage.apply.writeNum[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'wNumMenu';
        }
    };
    //项目经理审核
    $scope.pManager = function(){
        if($scope.idListd){
            $state.go('root.promoteManage.apply.pManager[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'pManagerMenu';
        }
    };
    //综合资源部规划模块审核
    $scope.resource = function(){
        if($scope.idListd){
            $state.go('root.promoteManage.apply.resource[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'resourceMenu';
        }
    };
    //运营商务部预算模块审核
    $scope.business = function(){
        if($scope.idListd){
            $state.go('root.promoteManage.apply.business[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'businessMenu';
        }
    };
    //模块负责人审核
    $scope.moduler = function(){
        if($scope.idListd){
            $state.go('root.promoteManage.apply.moduler[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'modulerMenu';
        }
    };
    //总经办审核
    $scope.writeManager = function(){
        if($scope.idListd){
            $state.go('root.promoteManage.apply.writeManager[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'writeManagerMenu';
        }
    };
});