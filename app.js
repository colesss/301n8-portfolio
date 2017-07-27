'use strict';

//global variable to house new projects
var allProjects = []

//constructor to contain new projects
function Projects (projectName, dateCreated, newSkills fileLocation) {
  this.projectName = projectName;
  this.dateCreated = dateCreated;
  this.newSkills = newSkills;
  this.fileLocation = fileLocation;
  allProjects.push(this);
}
