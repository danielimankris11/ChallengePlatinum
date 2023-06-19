package stepDefinition
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class Nego {


	@When("User click on the product card1")
	def User_click_on_the_product_card1() {
		WebUI.click(findTestObject('Object Repository/Kategori/div_Alat Tensi'))
	}

	@When("User click on the product card2")
	def User_click_on_the_product_card2() {
		WebUI.click(findTestObject('Object Repository/Kategori/div_Kamera'))
	}

	@When("User click on the product card3")
	def User_click_on_the_product_card3() {
		WebUI.click(findTestObject('Object Repository/Kategori/div_Sarung'))
	}

	@And("User click on button buy product")
	def User_click_on_button_buy_product() {

		WebUI.scrollToPosition(10, 0)

		WebUI.click(findTestObject('Nego/btn_nego'))
	}


	//PEMBEDA TEST CASE
	@And("User input character on price field")
	def User_input_character_on_price_field() {
		WebUI.delay(1)

		WebUI.setText(findTestObject('Nego/input_Harga_Tawar'), 'asdfasfa')
	}

	@And("User input valid price")
	def User_input_valid_price() {
		WebUI.delay(1)

		WebUI.setText(findTestObject('Nego/input_Harga_Tawar'), '50000')
	}

	@And("User input field price with more than nominal of the normal price")
	def User_input_field_price_with_more_than_nominal_of_the_normal_price() {
		WebUI.delay(1)

		WebUI.setText(findTestObject('Nego/input_Harga_Tawar'), '10000000000')
	}





	@And("User click button kirim")
	def User_click_button_kirim() {
		WebUI.click(findTestObject('Nego/button save'))
	}



	//ADA 2 THEN SUCCESS & NOT SUCCESS
	@Then("User should'nt success bidding the product")
	def User_shouldnt_success_bidding_the_product() {

	}

	@Then("User success bidding the product")
	def User_success_bidding_the_product() {

	}
}