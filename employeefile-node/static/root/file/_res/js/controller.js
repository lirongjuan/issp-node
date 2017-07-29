var app = angular.module('file', [{
    files: ['root/file/_res/js/service.js']
}]);
app.controller('fileCtrl', function ($scope,$state) {
    if ($state.current.url == '/file') {//默认加载列表
         $state.go('root.file.management');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,fileSer){
    $scope.navCla='management';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'management';
    $scope.navClass= function(name){
        $scope.navCla=name;
    };
    // 前面下拉导航权限
    fileSer.navPermission().then(function(response){

        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    // 设置导航权限
    fileSer.setPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    $scope.showsList = [
        {id:"1",item:"员工档案管理",menuList:[{name:'员工档案',msg:'management'}],showIs:false},
        {id:"2",item:"档案管理",menuList:[{name1:'人员资质',msg:'qualified'},{name2:'档案调阅',msg:'archives'},
            {name3:'档案明细',msg:'detailed'},{name4:'档案收集',msg:'collect'}],showIs:false},
        {id:"3",item:"对外信息管理",menuList:[{name5:'对外人员基本信息设置',msg:'basic'},{name6:'对外人员信息',msg:'message'}],showIs:false},
        {id:"4",item:"其他信息",menuList:[{name7:'公司社保购买类型',msg:'social'},{name8:'劳动关系类型',msg:'labour'},{name9:'附件类型',msg:'annex'}],showIs:false},
        {id:"5",item:"设置",menuList:[{name10:'设置',msg:'setting'}],showIs:false},
    ];

    if(active){
        for(var i = 0; i < $scope.showsList.length; i++) {
            var n = $scope.showsList[i].menuList;
            for (var j = 0; j < n.length; j++) {
                var m = n[j].msg;
                if (m == active) {
                    $scope.showsList[i].showIs = true;
                    break;
                }
            }
        }
    }
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };
});
app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();
                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title =  $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }

            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});


