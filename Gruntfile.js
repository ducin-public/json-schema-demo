module.exports = function (grunt) {

  grunt.initConfig({
    jsonschema_faker: {
      options: {
        indent: 2,
      },
      segment: {
        options: {
          size: 20
        },
        files: {
          'data.json': 'schema.json'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsonschema-faker');
  grunt.registerTask('default', ['jsonschema_faker']);
};
