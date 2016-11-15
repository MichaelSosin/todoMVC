'use strict';

// module.exports =
class TodoListController {
    constructor() {
        this.model = new TodoListModel();
        this.view = new TodoListView(this.model);
        this.view.addButtonHandler((title) => {
          this.model.add(title);
        });
        this.view.completeButtonHandler((id) => {
          this.model.complete(id);
        });
        this.view.removeButtonHandler((id) => {
          this.model.remove(id);
        });
    }
}
