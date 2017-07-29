var app = angular.module('app');
app.config(function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: 'indexSerModule',
                files: ['root/_res/js/service.js']
            }
        ]
    });
});
// function urlEncodeData() {
//     var obj = arguments[0];
//     var contacat = false;
//     if (arguments[0]) {
//         contacat = true;
//     }
//     var str = '';
//     var count = 0;
//     for (var name in obj) {
//         if (obj[name] && ( typeof obj[name]) != 'function') {
//             str += (((contacat && count == 0) ? '?' : '&') + name + '=' + obj[name]);
//         }
//         count++;
//     }
//
// }