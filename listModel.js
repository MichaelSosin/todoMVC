'use strict';

module.exports = class ListModel {
  constructor() {
    // the todo list
    this.items = [];
  }

  // returns item by id or by title, if no query is defined - returns whole list
  get(query, callback) {
    let queryType = typeof query,
        response;

    switch(queryType) {
      case 'function':
        callback = query;
        response = this.items;
        break;
      case 'number':
        response = this.items[query];
        break;
      case 'string':
        response = this.items.filter((item) => {return item.title === query; })[0];
        break;
      default:
        response = this.items;
    }
    
    if(typeof callback === 'function') {
      callback(response);
    }

    return response;
  }

  // adds item to the list, assign completed to false and returns this item
  add(title, callback) {
    if(typeof title === 'function' || !title) {
      return;
    }

    let newItem = {};

    if(title) {
      newItem = {
        title: title.trim(),
        completed: false
      };
      this.items.push(newItem);
    }

    if(typeof callback === 'function') {
      callback(newItem);
    }

    return newItem;
  }

  // counts completed, active and total items in list and returns an object
  getCount(callback) {
    let quantity = {
      active: 0,
      completed: 0,
      total: 0
    }

    this.items.forEach((item) => {
      if(item.completed) {
        quantity.completed++;
      } else {
        quantity.active++;
      }
      quantity.total++;
    });

    if(typeof callback === 'function') {
      callback(quantity);
    }

    return quantity;
  }

  // removes item by id (number in list) and returns it
  remove(id, callback) {
    if(typeof id === 'number') {
      let removedItem = this.items.splice(id, 1)[0];
      
      if(typeof callback === 'function') {
        callback(removedItem);
      }

      return removedItem;
    }
    
    return;
  }

  // removes all items from the list and returns empty list
  drop(callback) {
    this.items = [];

    if(typeof callback === 'function') {
      callback(this.items);
    }

    return this.items;

  }
}
