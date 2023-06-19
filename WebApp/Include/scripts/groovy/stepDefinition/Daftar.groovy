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



class Daftar {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("User click button masuk")
	public void User_click_button_masuk() {
		// Write code here that turns the phrase above into concrete actions
		WebUI.openBrowser('');
		WebUI.maximizeWindow();
		WebUI.navigateToUrl('https://secondhand-store.herokuapp.com/');
		WebUI.delay(10)
		WebUI.click(findTestObject('Object Repository/Page Login/a_Masuk'))
		//throw new PendingException();
	}
	@Given("User input registered nama (.*) email (.*) and password (.*)")
	public void user_input_registered_email(String nama, String registeredemail, String password) {
		// Write code here that turns the phrase above into concrete actions
		WebUI.click(findTestObject('Object Repository/Page Login/a_Masuk'))
		WebUI.click(findTestObject('Object Repository/Page Login/a_Daftar di sini'))
		WebUI.setText(findTestObject('Object Repository/Register/input_Nama_inputAddress'), nama)
		WebUI.setText(findTestObject('Object Repository/Register/input_Email address_exampleInputEmail1'), registeredemail)
		WebUI.setText(findTestObject('Object Repository/Register/input_Password_exampleInputPassword1'), password)
		WebUI.click(findTestObject('Object Repository/Register/button_Daftar'))
		//throw new PendingException();
	}
	@Then("user verify unsucess register")
	public void user_verify_unsucess_register() {
		WebUI.verifyElementVisible(findTestObject('Object Repository/Register/strong_Email sudah digunakan'))
		WebUI.delay(10)
	}
	@When("User input unregister nama (.*) email (.*) and password (.*)")
	public void user_input_unregister_email(String nama, String unregisteremail, String password) {
		// Write code here that turns the phrase above into concrete actions
		WebUI.click(findTestObject('Object Repository/Page Login/a_Daftar di sini'))
		WebUI.setText(findTestObject('Object Repository/Register/input_Nama_inputAddress'), nama)
		WebUI.setText(findTestObject('Object Repository/Register/input_Email address_exampleInputEmail1'), unregisteremail)
		WebUI.setText(findTestObject('Object Repository/Register/input_Password_exampleInputPassword1'), password)
		//throw new PendingException();
	}
	@When("User click button daftar")
	public void user_click_button_daftar() {
		WebUI.click(findTestObject('Object Repository/Register/button_Daftar'))
	}
	@Then("user verify success register")
	public void user_verify_sucess_register() {
		WebUI.verifyElementVisible(findTestObject('Object Repository/Register/strong_Silahkan verifikasi email agar dapat_32ea4a'))
		WebUI.delay(10)
	}
	@Then("close browser")
	public void close_browser() {
		WebUI.closeBrowser()
	}
}