'use strict';

module.exports = class ListModel {
  constructor() {
    this.items = [];
  }

  getAll() {
    return this.items;
  }

  add(title, callback) {
    title = title || '';
    callback = callback || function () {};

    let newItem = {
      title: title.trim(),
      completed: false
    }

    this.items.push(newItem);
    callback.call(this, newItem);
  }

  remove(id, callback) {
    id = id || '';
    callback = callback || function () {};
    let deletedItem = [];

    if(id) {
      deletedItem = this.items.splice(id, 1);
    }

    callback.call(this, deletedItem[0]);

  }
}
