'use strict';

//global variable to house new projects
var allProjects = []

//constructor to contain new projects
function Projects (newProjects) {
  this.projectName = newProjects.projectName;
  this.dateCreated = newProjects.dateCreated;
  this.newSkills = newProjects.newSkills;
  this.fileLocation = newProjects.fileLocation;
  allProjects.push(this);
}
