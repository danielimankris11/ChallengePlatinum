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



class TKategori {


	//TEST CASE 1

	@When("User klik kategori Hoby")
	public void User_klik_kategori_Hoby() {
		WebUI.click(findTestObject('Object Repository/Kategori/button_Hoby'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Hoby'))
	}
	@And("User klik kategori Kendaraan")
	public void User_klik_kategori_Kendaraan() {
		WebUI.click(findTestObject('Object Repository/Kategori/button_Kendaraan'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Kendaraan'))
	}
	@And("User klik kategori Baju")
	public void User_klik_kategori_Baju() {
		WebUI.click(findTestObject('Object Repository/Kategori/button_Baju'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Baju'))
	}
	@And("User klik kategori Elektronik")
	public void User_klik_kategori_Elektronik() {
		WebUI.click(findTestObject('Object Repository/Kategori/button_Elektronik'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Elektronik'))
	}

	@And("User klik kategori Kesehatan")
	public void User_klik_kategori_Kesehatan() {
		WebUI.click(findTestObject('Object Repository/Kategori/button_Kesehatan'))
		WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Kesehatan'))
	}

	@Then("Filtering by All Categories success")
	public void Filtering_by_All_Categories_success() {
		WebUI.closeBrowser()
	}






	//==============================================================================================
	//TEST CASE 2


	@When("User klik kategori Semua")
	public void User_klik_kategori_Semua() {
		WebUI.click(findTestObject('Object Repository/Kategori/button_Semua'))
	}


	@Then("User success filter Semua Categories")
	public void User_verify_element() {
		WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Kendaraan'))
		WebUI.closeBrowser()
	}
}
