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



class login {
	@Given("User start apps")
	public void user_start_apps() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.startApplication('androidapp\\app-release.apk', true)
	}

	@Then("User Click Akun")
	public void user_Click_Akun() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/android.widget.ImageView'), 0)
	}

	@Then("User Click Masuk")
	public void user_Click_Masuk() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/android.widget.Button - Masuk'), 0)
	}

	@Then("User enter email (.*) and password (.*)")
	public void user_enter_email_studentqa_binar_id_and_password_studentQA(String email, String password) {
		// Write code here that turns the phrase above into concrete actions
		Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan email (2)'), email,0)
		Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan password (2)'), password, 0)
	}

	@Then("User Clik login")
	public void user_Clik_login() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/android.widget.Button - Masuk (2)'), 0)
	}

	@Then("User Navigate to login page")
	public void user_Navigate_to_login_page() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/android.widget.ScrollView'), 0)
		Mobile.delay(5)
	}

	@Then("User click logout")
	public void User_clik_logout() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/android.widget.TextView - Keluar'), 0)
	}
}