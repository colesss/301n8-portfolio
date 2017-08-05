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
  allProjects.push(this);
}

$('.hamburger-icon').on('click', function () {
  $('.hamburger-menu').toggle();
});

Projects.prototype.toHtml = function() {
  var $newProjects = $('.template').clone();
  $newProjects.removeClass('template');

  //TODO - data-project attributes to filter stuff!

  $newProjects.find('h1').text(this.projectName);
  $newProjects.find('time').text(this.datePublished);
  $newProjects.find('.project-bio').html(this.projectBio);
  $newProjects.find('.new-skills').text(this.newSkills);
  $newProjects.find('a').attr('href', this.projectUrl);
  return $newProjects;
};

newProjects.forEach(function(projectObj) {
  new Projects(projectObj);
});

allProjects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

//Class 3 Portfolio (behind and need to use co-work time to catch up on this)
//Use event delegation whenever appropriate.
//Add click handlers to at leat one nav section.
//Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
//When classes and IDs are needed, pick semantic names. There is to be no $('#content .content') nonsense!
