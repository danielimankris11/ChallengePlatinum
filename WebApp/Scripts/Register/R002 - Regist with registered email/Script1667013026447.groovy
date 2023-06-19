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

WebUI.click(findTestObject('Page Login/a_Masuk'))

WebUI.click(findTestObject('Object Repository/Page Login/a_Daftar di sini'))

WebUI.click(findTestObject('Object Repository/Register/input_Nama_inputAddress'))

WebUI.setText(findTestObject('Object Repository/Register/input_Nama_inputAddress'), 'cobaregist')

WebUI.setText(findTestObject('Object Repository/Register/input_Email address_exampleInputEmail1'), 'cobaregist@yopmail.com')

WebUI.setEncryptedText(findTestObject('Object Repository/Register/input_Password_exampleInputPassword1'), '1CPnhsYrgTw/YZ/rANnBGw==')

WebUI.click(findTestObject('Object Repository/Register/button_Daftar'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Register/strong_Silahkan verifikasi email agar dapat_32ea4a'))

WebUI.closeBrowser()

