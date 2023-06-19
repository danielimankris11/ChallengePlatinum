@registermobile
Feature: Register
  I want to register newmember

Background:
Given User start apps

  @tag1
  Scenario Outline: Register Mobile
	  When User click Akun
	  Then User Click masuk
	  Then User Click Daftar
    Then User enter nama <name> and email <email> and password <password> and nomorHP <nomorHP> and kota <kota> and alamat <alamat>
    Then Click Daftar
    Then User navigate akun page

    Examples: 
      | name							| email 								| password 							| nomorHP						| kota 						| alamat						|
  		| Daniel.IK					| binarGGWPEZ@gmail.com	| satusampailima				|	081232424					|	yogyakarta			|	jogjakota					|
