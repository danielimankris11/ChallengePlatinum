@Profile
Feature: Title of your feature
  I want to use this template for my feature file

  Background: 
    Given User login

  @B001
  Scenario: Check UI Profile
    When User click account
    And User click profile
    And user verify component
    And user click home
    Then close browser

  @B002
  Scenario: Submit Change Profile
    When User click account
    And User click profile
    And user klik submit
    And verify success change profile
    And user click home
    Then close browser
