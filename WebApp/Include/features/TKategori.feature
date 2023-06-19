
@TKategori
Feature: Title of your feature
  I want to use this template for my feature file

	Background: 
    Given User login
  @K001
  Scenario: User checking all categories
    When User klik kategori Hoby
    And User klik kategori Kendaraan
    And User klik kategori Baju
    And User klik kategori Elektronik
    And User klik kategori Kesehatan
    And Filtering by All Categories success
		Then close browser

  @K002
  Scenario: User try to filter one of the categories
    When User klik kategori Semua
    Then User success filter Semua Categories