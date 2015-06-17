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
    },
    "age": {
      "type": "integer",
      "faker": {
        "random.number": {
	  "min": 5,
	  "max": 20
	}
      }
    }
  },
  "required": [
    "name",
    "email"
  ]
};

var sample = jsf(schema);
console.log(sample);
