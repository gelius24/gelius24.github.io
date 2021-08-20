var xlsx = require('xlsx')
var exfile = xlsx.readFile('Inventaire.xlsx')
var items = exfile.Sheets['Items']
var data = xlsx.utils.sheet_to_json(items)

console.log(data)