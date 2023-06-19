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



class SellProduct {


	@When("Click + Jual button")
	public void click_Jual_button() {
		// Write code here that turns the phrase above into concrete actions
		WebUI.click(findTestObject('Object Repository/sellProduct/button_Jual'))
	}

	@When("Input correct Nama Produk, Harga Produk, Kategori and Deskripsi")
	public void input_correct_Nama_Produk_Harga_Produk_Kategori_and_Deskripsi() {
		//		WebUI.delay(1000)
		WebUI.setText(findTestObject('Object Repository/sellProduct/textbox_Nama Produk'), 'Mug Glass')
		WebUI.setText(findTestObject('Object Repository/sellProduct/textbox_Harga Produk'), '50000')
		WebUI.click(findTestObject('sellProduct/pilih kategori'))
		WebUI.setText(findTestObject('Object Repository/sellProduct/textarea_Deskripsi'), 'Pattern Mug Glass (double glass).')
	}

	@Then("Click Terbitkan button")
	public void click_Terbitkan_button() {
		// Write code here that turns the phrase above into concrete actions

		WebUI.click(findTestObject('Object Repository/sellProduct/button_Terbitkan'))
	}

	@When("Input Nama Produk, wrong format Harga Produk, Kategori and Deskripsi")
	public void input_Nama_Produk_wrong_format_Harga_Produk_Kategori_and_Deskripsi() {
		// Write code here that turns the phrase above into concrete actions
		WebUI.setText(findTestObject('Object Repository/sellProduct/textbox_Nama Produk'), 'Mug Glass')
		WebUI.setText(findTestObject('Object Repository/sellProduct/textbox_Harga Produk'), 'abcde')
		WebUI.click(findTestObject('sellProduct/pilih kategori'))
		WebUI.setText(findTestObject('Object Repository/sellProduct/textarea_Deskripsi'), 'Pattern Mug Glass (double glass).')
	}

	@When("Input Harga Produk, Kategori and Deskripsi")
	public void input_Harga_Produk_Kategori_and_Deskripsi() {
		// Write code here that turns the phrase above into concrete actions
		WebUI.setText(findTestObject('Object Repository/sellProduct/textbox_Harga Produk'), '50000')
		WebUI.click(findTestObject('sellProduct/pilih kategori'))
		WebUI.setText(findTestObject('Object Repository/sellProduct/textarea_Deskripsi'), 'Pattern Mug Glass (double glass).')
	}
}