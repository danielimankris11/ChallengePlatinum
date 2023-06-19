@Logout
Feature: logout aplikasi
  I want to logout

Background:
Given User start apps

  @tag1
  Scenario Outline: logout aplikasi
	  When User login to account and enter username <username> and password <password>
    And Click Masuk Button
	  Then User Navigate to login page
	  Then User click logout
	  
    Examples: 
    | username 							| password 					|
    | studentqa2@binar.id		| studentQA2				|