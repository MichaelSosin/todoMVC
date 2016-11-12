'use strict';

// const Observer = require('./observer');
// const TodoList = require('./todoList');

// module.exports = 
class TodoListModel {
    constructor() {
        this.list = new TodoList();
        this.listChanged = new Observer();
    }

    get(args) {
        return this.list.get(args);
    }

    add(title) {
        return this.list.add(title, (item) => this.listChanged.notify(item) );
    }

    getCount() {
        return this.list.getCount();
    }

    remove(id) {
        if(!id) {
            return this.list.drop((items) => this.listChanged.notify(items));
        }

        return this.list.remove(id,(item) => this.listChanged.notify(item));
    }
}