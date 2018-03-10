app.directive('todoItem', function() {
    return {
        restrict: 'EA',
        template: '<li ng-mouseover="showDelete()" ng-mouseout="hideDelete()">' +
            '<input type="checkbox" ng-model="item.isComplete" ng-change="complete()" />' +
            '<span>{{item.name}}</span>' +
            '<a ng-show="isDeleteShow" ng-click="delete()">删除</a>' +
            '</li>',
        replace: true,
        scope: {
            item: '=item',
            delete: '&delete',
            complete: '&complete'
        },
        controller: function($scope) {
            $scope.isDeleteShow = false;
            // 显示删除按钮
            $scope.showDelete = function() {
                $scope.isDeleteShow = true;
            };
            $scope.hideDelete = function() {
                $scope.isDeleteShow = false;
            };
            

        }
    };
});