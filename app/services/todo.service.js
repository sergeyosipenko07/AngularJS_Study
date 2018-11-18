(function () {
    'use strict';
    angular.module('app')
        .factory('todoService', todoService);

    function todoService() {
        return {
            addNewItem,
            incompleteCount,
            warningLevel
        };

        function addNewItem(items, newItem) {
            if(newItem && newItem.action) {
                items.push({
                    action: newItem.action,
                    done: false
                });
                newItem.action = '';
            }
        }

        function incompleteCount(items) {
            let count = 0;

            angular.forEach(items, (item) => {
               if (!item.done) {
                   count++;
               }
            });

            return count;
        }
        
        function warningLevel(items) {
            return incompleteCount(items) < 3
                ? 'label-success'
                : 'label-warning'
        }
    }
}) ();
