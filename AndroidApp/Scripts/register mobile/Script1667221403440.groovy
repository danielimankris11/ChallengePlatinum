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

Mobile.startApplication('C:\\Users\\daniel\\Downloads\\app-release.apk', true)

Mobile.tap(findTestObject('Object Repository/android.widget.ImageView'), 0)

Mobile.tap(findTestObject('Object Repository/android.widget.Button - Masuk'), 0)

Mobile.tap(findTestObject('Object Repository/android.widget.TextView - Daftar'), 0)

Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan nama lengkap'), 'danielGG', 0)

Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan email (1)'), 'danielGG@gmail.com', 0)

Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan password (1)'), 'satusampailima', 0)

Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Contoh 08123456789'), '08123425678', 0)

Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan kota'), 'yogyakarta', 0)

Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Masukkan alamat'), 'jogja kota', 0)

Mobile.tap(findTestObject('Object Repository/android.widget.TextView - Daftar (1)'), 0)

Mobile.switchToPortrait()

Mobile.closeApplication()

