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

WebUI.navigateToUrl('https://deployed-five.vercel.app/')

WebUI.click(findTestObject('null'))

WebUI.setText(findTestObject('Page Login/textField_Email'), 'binarqae1@gmail.com')

WebUI.setText(findTestObject('Page Login/textField_Password'), 'students1234')

WebUI.click(findTestObject('Page Login/button_Masuk'))

WebUI.click(findTestObject('Object Repository/Page Dashboard/svg_Log Out_svg-inline--fa fa-user fa-lg'))

WebUI.click(findTestObject('Page Dashboard/a_Profile'))

WebUI.verifyElementVisible(findTestObject('Page Profile/label_Nama'))

WebUI.verifyElementVisible(findTestObject('Page Profile/textField_nama'))

WebUI.verifyElementVisible(findTestObject('Page Profile/label_Kota'))

WebUI.verifyElementVisible(findTestObject('Page Profile/dropDown_kota'))

WebUI.verifyElementVisible(findTestObject('Page Profile/label_Alamat'))

WebUI.verifyElementVisible(findTestObject('Page Profile/textarea_Alamat'))

WebUI.verifyElementVisible(findTestObject('Page Profile/label_NoHP'))

WebUI.verifyElementVisible(findTestObject('Page Profile/testField_NoHP'))

WebUI.verifyElementVisible(findTestObject('Page Profile/button_submitProfil'))

WebUI.closeBrowser()

