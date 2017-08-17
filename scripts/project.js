'use strict';

//global variable to house new projects
var allProjects = []

//constructor to contain new projects
function Projects (newProjects) {
  this.projectName = newProjects.projectName;
  this.datePublished = newProjects.datePublished;
  this.projectBio = newProjects.projectBio;
  this.newSkills = newProjects.newSkills;
  this.projectUrl = newProjects.fileLocation;
  //allProjects.push(this);
}

Projects.prototype.toHtml = function() {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  return template(this);
};

newProjects.forEach(function(projectObj) {
  allProjects.push (new Projects(projectObj));
});

allProjects.forEach(function(project) {
  $('#project').append(project.toHtml());
});
