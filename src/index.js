"use strict";
const fs = require('fs')

fs.readFile('src/1223.txt', function(err, data) {
    let lists = data.toString()
    lists = lists.split('\t').join(',')
    lists = lists.split(',');
    let json = [];
    let obj = {}
    let reg = '&'
    let abc = {}
    for (let index=0; index < lists.length; index++) {

            if (!lists[index].match(reg)) {
                obj = {
                    name: '',
                    value: ''
                }
                obj.name = lists[index].toString()
            } else if (lists[index].match(reg)) {
                obj.value = lists[index].toString()
                obj.value = obj.value.split(';')[0] + ';'
                abc[obj.value.toString()] = obj.value
                json.push(obj)
                obj = {
                    name: '',
                    value: ''
                }
            }
    }
    fs.writeFileSync('src/symbol.json', JSON.stringify(json), function(err) {

    })
})
