import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://secondhand-store.herokuapp.com/')

WebUI.click(findTestObject('Object Repository/Kategori/button_Hoby'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Hoby'))

WebUI.click(findTestObject('Object Repository/Kategori/button_Kendaraan'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Kendaraan'))

WebUI.click(findTestObject('Object Repository/Kategori/button_Baju'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Baju'))

WebUI.click(findTestObject('Object Repository/Kategori/button_Elektronik'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Elektronik'))

WebUI.click(findTestObject('Object Repository/Kategori/button_Kesehatan'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Kategori/p_Kesehatan'))

WebUI.closeBrowser()

