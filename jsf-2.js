var jsf = require('json-schema-faker');
var schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "faker": "name.findName"
    },
    "email": {
      "type": "string",
      "faker": "internet.email"
    }
  },
  "required": [
    "name",
    "email"
  ]
};

var sample = jsf(schema);
console.log(sample);
