'use strict';

//global variable to house new projects
var allProjects = [];

(function() {
  $.getJSON('data/projects.json')
    .done(function(projectsArrayViaJSON) {
      var template = Handlebars.compile($('#entry-template').html());
      projectsArrayViaJSON.map(function(project) {
        $('#projects').append(template(project));
        allProjects.push(project);
      })
    var projectCount = 0;
    allProjects.reduce((acc, curr) => {projectCount++});
    console.log(projectCount++);
    })
} )()
