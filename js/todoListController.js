'use strict';

// module.exports = 
class TodoListController {
    constructor() {
        this.model = new TodoListModel();
        this.view = new TodoListView(this.model);
    }

    render() {
        this.view.render();
    }

    add(title) {
        this.model.add(title);
    }

    remove(id) {
        this.model.remove(id);
    }
}