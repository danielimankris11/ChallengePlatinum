@ProdukDiminati
Feature: accept or reject buyer's bid

  Background: 
    Given User login

  @PD-01
  Scenario: terima nego
    When User click burger icon01
    And User click button diminati01
    And User click card product01
    And User click button terima01
    And User success terima nego pembeli
    Then close browser

  @PD-02
  Scenario: Terima jual
    When User click burger icon02
    And User click button diminati02
    And User click card product02
    And User click button terima02
    And User success tolak nego pembeli
    Then close browser
