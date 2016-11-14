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
        this.list.add(title);
        this.listChanged.notify();
    }

    getCount() {
        return this.list.getCount();
    }

    remove(id) {
        if(!id) {
            this.list.drop();
        }

        this.list.remove(id);
        console.log(this.list);
        this.listChanged.notify();
    }
}
