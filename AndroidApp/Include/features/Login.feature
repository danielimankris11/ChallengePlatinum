@login
Feature: login
  I want to login

Background:
Given User start apps

  @tag1
  Scenario Outline: login
	  When User login to account and enter username <username> and password <password>
    And Click Masuk Button
	  Then User Navigate to login page
	  
    Examples: 
    | username 							| password 					|
    | studentqa2@binar.id		| studentQA2				|