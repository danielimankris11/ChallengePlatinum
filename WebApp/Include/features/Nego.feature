@Nego
Feature: Bid Feature
  I want to bid the product

  Background: 
    Given User login

  @N-01
  Scenario: Nego with valid price
    When User click on the product card1
    And User click on button buy product
    And User input valid price
    And User click button kirim
    And User success bidding the product
    Then close browser

  @N-02
  Scenario: Nego with inputing charachter not an number
    When User click on the product card2
    And User click on button buy product
    And User input character on price field
    And User click button kirim
    And User should'nt success bidding the product
    Then close browser

  @N-03
  Scenario: Nego with inputing more than real price
    When User click on the product card3
    And User click on button buy product
    And User input field price with more than nominal of the normal price
    And User click button kirim
    And User should'nt success bidding the product
    Then close browser
