var jsf = require('json-schema-faker');
var schema = {
  "type": "array",
  "minItems": 5,
  "items": {
    "enum": [
      "red",
      "green",
      "blue",
      "yellow"
    ]
  }
};

var sample = jsf(schema);
console.log(sample);
