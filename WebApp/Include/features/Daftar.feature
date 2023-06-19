@Daftar
Feature: Title of your feature
  I want to use this template for my feature file

  @R001
  Scenario Outline: Register w/ registered user
    Given User input registered nama <nama> email <registeredemail> and password <password>
    When user verify unsucess register
    Then close browser

    Examples: 
      | nama           | registeredemail      | password |
      | userregistered | cobaregister6@yopmail.com | cobaregister6 |

  @R002
  Scenario Outline: Register w/ unregister user
    Given User click button masuk
    When User input unregister nama <nama> email <unregisteremail> and password <password>
    And User click button daftar
    And user verify success register
    Then close browser

    Examples: 
      | nama           		| unregisteremail           | password      |
      | user unregistered | cobaregister15@yopmail.com | cobaregister15 |
