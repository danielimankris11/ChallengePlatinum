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

class Login {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@When("User input username (.*) and password (.*)")
	public void user_input_username_and_password(String username, String password) {
		// Write code here that turns the phrase above into concrete actions
		WebUI.setText(findTestObject('Object Repository/Page Login/textField_Email'), username)
		WebUI.setText(findTestObject('Object Repository/Page Login/textField_Password'), password)
		//throw new PendingException();
	}
	@And("User click login")
	public void user_click_login() {
		WebUI.click(findTestObject('Object Repository/Page Login/button_Masuk'))
	}
	@Then("Display pop up warning unregistered username to user")
	public void display_pop_up_warning_unregistered_username_to_user() {
		// Write code here that turns the phrase above into concrete actions
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Login/p_Akun tidak ditemukan'))
		WebUI.delay(5)
		//throw new PendingException();
	}
	@Then("Display pop up warning unverif username")
	public void display_pop_up_warning_unverif_username() {
		// Write code here that turns the phrase above into concrete actions
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Login/p_Silahkan cek email anda untuk melakukan verifikasi terlebih dahulu'))
		WebUI.delay(5)
		//throw new PendingException();
	}
	@Then("Display pop up warning invalid password to user")
	public void display_pop_up_warning_invalid_password_to_user() {
		// Write code here that turns the phrase above into concrete actions
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Login/p_Password anda salah'))
		WebUI.delay(5)
		// throw new PendingException();
	}
	@Then("User navigate to homepage")
	public void user_navigate_to_homepage() {
		WebUI.delay(5)
	}
}