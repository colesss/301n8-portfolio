'use strict';

var projectView = {};

projectView.handleMainNav = function () {
  $('a.menu').on('click', function(event) {
    event.preventDefault();
    $('.menu-content').hide();
    var dataContent = $(this).attr('data-content');
    console.log('data-content = '+dataContent);
    $('#' + dataContent).show();
  });
};


$(document).ready(function(){
  projectView.handleMainNav();
  $('.hamburger-icon').on('click', function () {
    $('.hamburger-menu').toggle();
  });
});
