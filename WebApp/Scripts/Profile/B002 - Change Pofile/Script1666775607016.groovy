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

WebUI.click(findTestObject('Kategori/a_Masuk'))

WebUI.setText(findTestObject('Kategori/input_Email_exampleInputEmail1'), 'binarqae1@gmail.com')

WebUI.setEncryptedText(findTestObject('Kategori/input_Password_exampleInputPassword1'), 'g+QaOHRJGfsyY/fTDdy8CA==')

WebUI.click(findTestObject('Kategori/button_Masuk'))

WebUI.click(findTestObject('Kategori/path'))

WebUI.click(findTestObject('Kategori/a_Profile'))

WebUI.setText(findTestObject('Kategori/input_Nama_nm_produk'), 'Binar QAE 1')

WebUI.selectOptionByValue(findTestObject('Kategori/select_Pilih kotaBandungBogorJemberKediriLu_56995e'), 'Pilih kota', 
    true)

WebUI.setText(findTestObject('Kategori/input_No.Handphone_nm_produk'), '08788675666')

WebUI.click(findTestObject('Kategori/button_submit'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Register/p_Berhasil update profile'))

