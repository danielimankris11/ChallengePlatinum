$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "login",
  "description": "  I want to login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User login to account and enter username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click Masuk Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Navigate to login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "studentqa2@binar.id",
        "studentQA2"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User start apps",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_start_apps()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User login to account and enter username studentqa2@binar.id and password studentQA2",
  "keyword": "When "
});
formatter.match({
  "location": "sellProduct.user_login_to_account_and_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Masuk Button",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.click_Masuk_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_Navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Logout.feature");
formatter.feature({
  "name": "logout aplikasi",
  "description": "  I want to logout",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Logout"
    }
  ]
});
formatter.scenarioOutline({
  "name": "logout aplikasi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User login to account and enter username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click Masuk Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click logout",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "studentqa2@binar.id",
        "studentQA2"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User start apps",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_start_apps()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "logout aplikasi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Logout"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User login to account and enter username studentqa2@binar.id and password studentQA2",
  "keyword": "When "
});
formatter.match({
  "location": "sellProduct.user_login_to_account_and_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Masuk Button",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.click_Masuk_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_Navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click logout",
  "keyword": "Then "
});
formatter.match({
  "location": "login.User_clik_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/registermobile.feature");
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
  "name": "User click Akun",
  "keyword": "When "
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
        "Daniel.IK",
        "binarGGWPEZ@gmail.com",
        "satusampailima",
        "081232424",
        "yogyakarta",
        "jogjakota"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User start apps",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_start_apps()"
});
formatter.result({
  "status": "passed"
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
  "name": "User click Akun",
  "keyword": "When "
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
  "name": "User enter nama Daniel.IK and email binarGGWPEZ@gmail.com and password satusampailima and nomorHP 081232424 and kota yogyakarta and alamat jogjakota",
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
formatter.uri("Include/features/sellProduct.feature");
formatter.feature({
  "name": "Sell Product",
  "description": "  User need to add some product for sell",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sellProduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Post new sell product without upload picture",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sell1"
    }
  ]
});
formatter.step({
  "name": "User login to account and enter username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click Masuk Button",
  "keyword": "And "
});
formatter.step({
  "name": "Click + Button",
  "keyword": "And "
});
formatter.step({
  "name": "Input Product field information without upload picture",
  "keyword": "And "
});
formatter.step({
  "name": "Click Terbitkan Button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "studentqa2@binar.id",
        "studentQA2"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User start apps",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_start_apps()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post new sell product without upload picture",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sellProduct"
    },
    {
      "name": "@sell1"
    }
  ]
});
formatter.step({
  "name": "User login to account and enter username studentqa2@binar.id and password studentQA2",
  "keyword": "When "
});
formatter.match({
  "location": "sellProduct.user_login_to_account_and_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Masuk Button",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.click_Masuk_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click + Button",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.click_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input Product field information without upload picture",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.input_Product_field_information_without_upload_picture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Terbitkan Button",
  "keyword": "Then "
});
formatter.match({
  "location": "sellProduct.click_Terbitkan_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Post new sell product without input Nama Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sell2"
    }
  ]
});
formatter.step({
  "name": "User login to account and enter username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click Masuk Button",
  "keyword": "And "
});
formatter.step({
  "name": "Click + Button",
  "keyword": "And "
});
formatter.step({
  "name": "Input Product field information without input Nama Product",
  "keyword": "And "
});
formatter.step({
  "name": "Click Terbitkan Button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "studentqa2@binar.id",
        "studentQA2"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User start apps",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_start_apps()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post new sell product without input Nama Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sellProduct"
    },
    {
      "name": "@sell2"
    }
  ]
});
formatter.step({
  "name": "User login to account and enter username studentqa2@binar.id and password studentQA2",
  "keyword": "When "
});
formatter.match({
  "location": "sellProduct.user_login_to_account_and_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Masuk Button",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.click_Masuk_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click + Button",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.click_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input Product field information without input Nama Product",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.input_Product_field_information_without_input_Nama_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Terbitkan Button",
  "keyword": "Then "
});
formatter.match({
  "location": "sellProduct.click_Terbitkan_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Post new sell product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sell3"
    }
  ]
});
formatter.step({
  "name": "User login to account and enter username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click Masuk Button",
  "keyword": "And "
});
formatter.step({
  "name": "Click + Button",
  "keyword": "And "
});
formatter.step({
  "name": "Input complete Product field information",
  "keyword": "And "
});
formatter.step({
  "name": "Click Terbitkan Button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "studentqa2@binar.id",
        "studentQA2"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User start apps",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_start_apps()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post new sell product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sellProduct"
    },
    {
      "name": "@sell3"
    }
  ]
});
formatter.step({
  "name": "User login to account and enter username studentqa2@binar.id and password studentQA2",
  "keyword": "When "
});
formatter.match({
  "location": "sellProduct.user_login_to_account_and_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Masuk Button",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.click_Masuk_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click + Button",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.click_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input complete Product field information",
  "keyword": "And "
});
formatter.match({
  "location": "sellProduct.input_complete_Product_field_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Terbitkan Button",
  "keyword": "Then "
});
formatter.match({
  "location": "sellProduct.click_Terbitkan_Button()"
});
formatter.result({
  "status": "passed"
});
});