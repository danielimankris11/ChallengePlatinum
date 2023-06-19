$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/registermobile.feature");
formatter.feature({
  "name": "Register",
  "description": "  I want to register newmember",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@registermobile"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Register Mobile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User start app",
  "keyword": "Given "
});
formatter.step({
  "name": "User click Akun",
  "keyword": "Then "
});
formatter.step({
  "name": "User Click masuk",
  "keyword": "Then "
});
formatter.step({
  "name": "User Click Daftar",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter nama \u003cname\u003e and email \u003cemail\u003e and password \u003cpassword\u003e and nomorHP \u003cnomorHP\u003e and kota \u003ckota\u003e and alamat \u003calamat\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Click Daftar",
  "keyword": "Then "
});
formatter.step({
  "name": "User navigate akun page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "password",
        "nomorHP",
        "kota",
        "alamat"
      ]
    },
    {
      "cells": [
        "DanielGGWP",
        "danielGGWP@gmail.com",
        "satusampailima",
        "081232424",
        "yogyakarta",
        "jogjakota"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register Mobile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registermobile"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User start app",
  "keyword": "Given "
});
formatter.match({
  "location": "registermobile.user_start_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Akun",
  "keyword": "Then "
});
formatter.match({
  "location": "registermobile.user_click_Akun()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "registermobile.user_Click_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "registermobile.user_Click_Daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter nama DanielGGWP and email danielGGWP@gmail.com and password satusampailima and nomorHP 081232424 and kota yogyakarta and alamat jogjakota",
  "keyword": "Then "
});
formatter.match({
  "location": "registermobile.user_enter_nama_and_email_and_password_and_nomorHP_and_kota_and_alamat(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "registermobile.click_Daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate akun page",
  "keyword": "Then "
});
formatter.match({
  "location": "registermobile.user_navigate_akun_page()"
});
formatter.result({
  "status": "passed"
});
});