
@SellProduct
Feature: Sell Product
  I want to use this template for my feature file
  
  Background:
  
    Given User login

  @A001
  Scenario Outline: Success Add New Sell Product
    When Click + Jual button
    And Input correct Nama Produk, Harga Produk, Kategori and Deskripsi
    And Click Terbitkan button
    Then close browser

    Examples: 
      | username  					| password 			|
      | binarqae1@gmail.com	| students1234	|

  @A002
  Scenario: Failed Add New Sell Product (wrong format Harga Produk)
    When Click + Jual button
    And Input Nama Produk, wrong format Harga Produk, Kategori and Deskripsi
    And Click Terbitkan button
    Then close browser

  @A003
  Scenario: Failed Add New Sell Product (not input Nama Produk)
    When Click + Jual button
    And Input Harga Produk, Kategori and Deskripsi
    And Click Terbitkan button
    Then close browser
