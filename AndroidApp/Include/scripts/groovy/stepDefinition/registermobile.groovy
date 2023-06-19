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



class registermobile {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("User start app")
	public void user_start_app() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.startApplication('androidapp\\app-release.apk', true)
	}

	@Then("User click Akun")
	public void user_click_Akun() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/android.widget.ImageView'), 0)
	}

	@Then("User Click masuk")
	public void user_Click_masuk() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/android.widget.Button - Masuk'), 0)
	}

	@Then("User Click Daftar")
	public void user_Click_Daftar() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/android.widget.TextView - Daftar'), 0)
	}

	@Then("User enter nama (.*) and email (.*) and password (.*) and nomorHP (.*) and kota (.*) and alamat (.*)")
	public void user_enter_nama_and_email_and_password_and_nomorHP_and_kota_and_alamat(String nama, String email, String password, String nomorHP, String kota, String alamat) {
		// Write code here that turns the phrase above into concrete actions
		Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan nama lengkap'), nama, 0)
		Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan email (1)'), email, 0)
		Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan password (1)'), password, 0)
		Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Contoh 08123456789'), nomorHP, 0)
		Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan kota'), kota, 0)
		Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan alamat'), alamat, 0)
	}

	@Then("Click Daftar")
	public void click_Daftar() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/android.widget.TextView - Daftar (1)'), 0)
	}

	@Then("User navigate akun page")
	public void user_navigate_akun_page() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.switchToPortrait()
		Mobile.delay(5)
	}
}