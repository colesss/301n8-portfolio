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

//Class 3 Portfolio (behind and need to use co-work time to catch up on this)
//Use event delegation whenever appropriate.
//Add click handlers to at leat one nav section.
//Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
//When classes and IDs are needed, pick semantic names. There is to be no $('#content .content') nonsense!
