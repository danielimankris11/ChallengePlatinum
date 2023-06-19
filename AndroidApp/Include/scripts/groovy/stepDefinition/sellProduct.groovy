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


class sellProduct {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
//	@Given("User start application")
//	public void user_start_application() {
//		// Write code here that turns the phrase above into concrete actions
//		Mobile.startApplication('androidapp\\app-release.apk', true)
//		
//	}

	@When("User login to account and enter username (.*) and password (.*)")
	public void user_login_to_account_and_enter_username_and_password(String username , String password) {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/sellProduct/android.widget.ImageView'), 0)
		Mobile.tap(findTestObject('Object Repository/sellProduct/android.widget.Button - Masuk'), 0)
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Masukkan email'), username, 0)
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Masukkan password'), password, 0)
	}

	@When("Click Masuk Button")
	public void click_Masuk_Button() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/sellProduct/android.widget.Button - Masuk (1)'), 0)
	}

	@When("Click + Button")
	public void click_Button() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/sellProduct/android.widget.ImageButton'), 0)
	}

	@When("Input Product field information without upload picture")
	public void input_Product_field_information_without_upload_picture() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Nama Produk'), 'Mug glass', 0)
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Rp 0,00'), '50000', 0)
		Mobile.tap(findTestObject('Object Repository/sellProduct/android.widget.Spinner - Pilih Kategori'), 1)
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Lokasi Produk'), 'Jakarta', 0)
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Contoh Barang bagus mantap'), 'Transparent Mug glass new ', 0)
	}

	@When("Input Product field information without input Nama Product")
	public void input_Product_field_information_without_input_Nama_Product() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Rp 0,00'), '50000', 0)
		Mobile.tap(findTestObject('Object Repository/sellProduct/android.widget.Spinner - Pilih Kategori'), 1)
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Lokasi Produk'), 'Jakarta', 0)
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Contoh Barang bagus mantap'), 'Transparent Mug glass new ', 0)
	}

	@When("Input complete Product field information")
	public void input_complete_Product_field_information() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Nama Produk'), 'Mug glass', 0)
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Rp 0,00'), '', 0)
		Mobile.tap(findTestObject('Object Repository/sellProduct/android.widget.Spinner - Pilih Kategori'), 1)
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Lokasi Produk'), 'Jakarta', 0)
		Mobile.setText(findTestObject('Object Repository/sellProduct/android.widget.EditText - Contoh Barang bagus mantap'), 'Transparent Mug glass new ', 0)
//		Mobile.sendKeys(findTestObject('Upload File'), 'upload////Mug Glass.jpeg')
//		FilePath = Mobile.getAttribute(findTestObject('Upload File'), 'value')
//		Mobile.verifyMatch(FilePath, 'upload\\Mug Glass.jpeg', false)
	}

	@Then("Click Terbitkan Button")
	public void click_Terbitkan_Button() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/sellProduct/android.widget.Button - Terbitkan'), 0)
	}
}