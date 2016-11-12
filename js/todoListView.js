'use strict';

// const template = require('template.js');

// module.exports = 
class TodoListView {
    constructor(model) {
        this.model = model;
        this.template = new ListTemplate();
        this.dom = {
            list: document.getElementsByClassName('todo-list')[0],
            addButton: document.getElementsByClassName('add-button')[0]
        }
    }

    render() {
        this.dom.list.innerHTML = this.template.getList(this.model.get());
    }
}