var app = angular.module('taxes1', [{
    files: ['root/taxes/_res/js/service.js']
}]);
app.controller('taxes1Ctrl', function ($scope,$state) {
    if ($state.current.url == '/taxes') {//默认加载列表
         $state.go('root.taxes.taxes');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,taxesSer){
    $scope.navCla='taxesmanage';
    var active = $location.path().split('/')[3] == 'setting'?$location.path().split('/')[3]:$location.path().split('/')[4];
    $scope.navCla=active?active:'taxesmanage';
    $scope.navClass= function(name){
        $scope.navCla=name
    }

    taxesSer.navPermission().then(function(response){
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
    taxesSer.setPermission().then(function(response){
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

    //导航菜单
    $scope.showsList = [
        {id:"1",item:"对外税务",menuList:[{name:'税金管理',msg:'taxesmanage'},{name2:'外账资料管理',msg:'account'}],showIs:false},
        {id:"2",item:"设置",menuList:[{name3:'设置',msg:'setting'}],showIs:false},
    ];
    if(active){
        for(var i = 0;i < $scope.showsList.length;i++){
            var n = $scope.showsList[i].menuList;
            for(var j = 0;j < n.length;j++){
                var m = n[j].msg;
                if(m == active){
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
//自定义指令
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

            });
        }
    };
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    };
});