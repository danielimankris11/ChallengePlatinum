
@sellProduct
Feature: Sell Product 
  User need to add some product for sell
  
  Background:
	Given User start apps

  @sell1
  Scenario Outline: Post new sell product without upload picture
    When User login to account and enter username <username> and password <password>
    And Click Masuk Button
    And Click + Button
    And Input Product field information without upload picture
    Then Click Terbitkan Button

    Examples: 
      | username 								| password 			|
      | studentqa2@binar.id			| studentQA2		|
      

  @sell2
  Scenario Outline: Post new sell product without input Nama Product
    When User login to account and enter username <username> and password <password>
    And Click Masuk Button
    And Click + Button
    And Input Product field information without input Nama Product
    Then Click Terbitkan Button

    Examples: 
      | username 								| password 			|
      | studentqa2@binar.id			| studentQA2		|
      #
      #
	@sell3
  Scenario Outline: Post new sell product 
    When User login to account and enter username <username> and password <password>
    And Click Masuk Button
    And Click + Button
    And Input complete Product field information
    Then Click Terbitkan Button

    Examples: 
      | username 								| password 			|
      | studentqa2@binar.id			| studentQA2		|