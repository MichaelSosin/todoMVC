'use strict';

module.exports = class ListModel {
  constructor() {
    this.items = [];
  }

  get(query, callback) {
    let queryType = typeof query;
    callback = callback || function () {};

    if(!query) {
      callback.call(this, this.items);
      return this.items;
    } else if (queryType === 'function') {
      callback = query;
      callback.call(this, this.items);
      return this.items;
    } else if (queryType === 'number') {
      let item = this.items[query];
      callback.call(this, item[0]);
      return item[0];
    } else if (queryType === 'string') {
      let item = this.items.filter((item) => {return item.title === query; });
      callback.call(this, item[0]);
      return item[0];
    }
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
