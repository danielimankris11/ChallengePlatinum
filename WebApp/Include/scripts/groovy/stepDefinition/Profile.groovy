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



class Profile {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given ("User click account")
	public void User_click_account(){
		// Write code here that turns the phrase above into concrete actions
		WebUI.click(findTestObject('Object Repository/Page Dashboard/button_Account'))
		//throw new PendingException();
	}
	@Given("User login")
	public void User_login() {
		// Write code here that turns the phrase above into concrete actions
		WebUI.openBrowser('');
		WebUI.maximizeWindow();
		WebUI.navigateToUrl('https://secondhand-store.herokuapp.com/');
		WebUI.delay(10)
		WebUI.click(findTestObject('Object Repository/Page Login/a_Masuk'))
		WebUI.setText(findTestObject('Object Repository/Page Login/textField_Email'), 'cobaregister6@yopmail.com')
		WebUI.setText(findTestObject('Object Repository/Page Login/textField_Password'), 'cobaregister6')
		WebUI.click(findTestObject('Object Repository/Page Login/button_Masuk'))
		//throw new PendingException();
	}
	@Then("user click home")
	public void user_click_home() {
		WebUI.click(findTestObject('Object Repository/Page Dashboard/a_home'))
	}
	@When("User click profile")
	public void User_click_profile() {
		WebUI.click(findTestObject('Object Repository/Page Dashboard/a_Profile'))
		WebUI.delay(5)
	}
	@And("user klik submit")
	public void user_klik_submit() {
		WebUI.setText(findTestObject('Object Repository/Page Profile/textField_nama'), 'Annisa Rinjani')
		WebUI.setText(findTestObject('Object Repository/Page Profile/testField_NoHP'), '45674567')
		WebUI.click(findTestObject('Object Repository/Page Profile/button_submitProfil'))
	}

	@And("verify success change profile")
	public void verify_success_change_profile() {
		WebUI.verifyElementVisible(findTestObject('Object Repository/Register/p_Berhasil update profile'))
		WebUI.delay(10)
	}

	@And("user verify component")
	public void user_verify_component() {
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Profile/label_Nama'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Profile/textField_nama'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Profile/label_Kota'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Profile/dropDown_kota'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Profile/label_Alamat'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Profile/textarea_Alamat'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Profile/label_NoHP'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Profile/testField_NoHP'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Page Profile/button_submitProfil'))
		WebUI.delay(5)
	}
}