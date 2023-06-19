@Login
Feature: Title of your feature
  I want to use this template for my feature file

  Background: 
    Given User click button masuk

  @L001
  Scenario Outline: Test Login without unregistered user
    When User input username <username> and password <password>
    And User click login
    And Display pop up warning unregistered username to user
    Then close browser

    Examples: 
      | username    				| password     |
      | binarqa12@gmail.com | students1234 |

  @L002
  Scenario Outline: Test Login with Invalid Password
    When User input username <username> and password <password>
    And User click login
    And Display pop up warning invalid password to user
    Then close browser

    Examples: 
      | username            | password |
      | binarqae1@gmail.com | students12345   |

@L003
  Scenario Outline: Test Login with unverif email
    When User input username <username> and password <password>
    And User click login
    And Display pop up warning unverif username
    Then close browser

    Examples: 
      | username             			| password |
      | cobaregister9@yopmail.com | cobaregister9 |

  @L004
  Scenario Outline: Test Login with Valid Password
    When User input username <username> and password <password>
    And User click login
    And User navigate to homepage
    Then close browser

    Examples: 
      | username             | password |
      | cobaregister6@yopmail.com | cobaregister6 |
