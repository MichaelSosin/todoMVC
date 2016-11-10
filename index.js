'use strict';

const ListModel = require('./listModel');

let list = new ListModel();

list.add('Learn HTML', () => { });
list.add('Learn CSS', () => { });
list.add('Learn JS', () => { });

console.log(list.get());

list.remove(1, () => { });

console.log(list.get());

console.log(list.get('Learn HTML'));

let countObj = list.getCount();
console.log(countObj.completed);
console.log(countObj.active);
console.log(countObj.total);

list.drop((items) => { console.log(items) });
