'use strict';

const ListModel = require('./listModel');

let list = new ListModel();

list.add('Learn HTML', (newItem) => { console.log(newItem.title); });
list.add('Learn CSS', (newItem) => { console.log(newItem.title); });
list.add('Learn JS', (newItem) => { console.log(newItem.title); });

console.log(list.get());

list.remove(1, (item) => { console.log(item.title); });

console.log(list.get());

console.log(list.get('Learn HTML'));

list.getCount((quan) => {
  console.log(quan.active);
  console.log(quan.completed);
  console.log(quan.total);

});

list.drop((items) => { console.log(items) });
