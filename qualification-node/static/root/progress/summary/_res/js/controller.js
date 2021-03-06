var app = angular.module('summary', [{
    files : [
        "root/progress/summary/_res/js/service.js"
    ]
}]);
app.controller('summaryCtrl', function($scope, $state){

    if($state.current.url == '/summary'){//默认加载列表
        $state.go('root.progress.summary.list[12]')
    }
    ;

}).controller('summaryMenuCtrl', function($scope, $state, $rootScope, $location,summarySer){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1] || window.location.href.split('cusNum=')) {//如果是刷新进来的页面，没有经过list
        $scope.getId = window.location.href.split('id=')[1] || window.location.href.split('cusNum=')[1];
        $scope.customerNum = window.location.href.split('customerNum=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name){
        var buttonName = name;
        $scope.buttonShow = true;
        summarySer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 &&response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };

    $scope.$on("passId", function(event, id){
        $scope.getId = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.progress.summary.edit[12]', {id : $scope.getId,page:$scope.page});
            $scope.menuClass = 'editMenu';
        }
    };
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.progress.summary.list[12]', {id : $scope.getId,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';
        }
    }
    //上传
    $scope.upload = function(){
        if($scope.getId){
            $state.go('root.progress.summary.upload[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='uploadMenu';
        }
    };
    //下载
    $scope.view = function(){
        if($scope.getId){
            $state.go('root.progress.summary.view[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='viewMenu';
        }
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.select = function(){
        $scope.menuClass = 'selectMenu';
        $scope.getId = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.getId = ''
    }
});

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "NONE":
                result = "未办理";
                break;
            case "SUCCESS":
                result = "办理成功";
                break;
            case "FAIL":
                result = "办理失败";
                break;
            case "LIST":
                result = "列表";
                break;
            case "ADD":
                result = "添加";
                break;
            case "EDIT":
                result = "编辑";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "SEE":
                result = "查看";
                break;
            case "UPLOAD":
                result = "上传附件";
                break;
            case "DOWNLOAD":
                result = "下载附件";
                break;

        }
        return result;
    }
})

