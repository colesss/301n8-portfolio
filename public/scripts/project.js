'use strict';

//global variable to house new projects
var allProjects = [];

//constructor to contain new projects
function Projects (newProjects) {
  this.projectName = newProjects.projectName;
  this.datePublished = newProjects.datePublished;
  this.projectBio = newProjects.projectBio;
  this.newSkills = newProjects.newSkills;
  this.projectUrl = newProjects.fileLocation;
}

$.getJSON('data/projects.json')
  .done(function(projectsArrayViaJSON) {
    var template = Handlebars.compile($('#entry-template').html());
    projectsArrayViaJSON.forEach(function(project) {
      $('#projects').append(template(project));
    })
  })
