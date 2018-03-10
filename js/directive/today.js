var WEEK_MAP = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
app.directive('today',function(){
    var oDate = new Date();
    var month = oDate.getMonth() + 1;
    var date = oDate.getDate();
    var day = oDate.getDay();
    var html = month + '月' + date + '日，' + WEEK_MAP[day];
    return {
        restrict: 'EA',
        template: '<h2>' + html + '</h2>',
        replace: true,
        scope: {
            todoList: '=data'
        },
        controller: function ($scope) {

        }
    };
});