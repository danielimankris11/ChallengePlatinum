$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Daftar.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Daftar"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Register w/ registered user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@R001"
    }
  ]
});
formatter.step({
  "name": "User input registered nama \u003cnama\u003e email \u003cregisteredemail\u003e and password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "user verify unsucess register",
  "keyword": "When "
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "registeredemail",
        "password"
      ]
    },
    {
      "cells": [
        "userregistered",
        "cobaregister6@yopmail.com",
        "cobaregister6"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register w/ registered user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Daftar"
    },
    {
      "name": "@R001"
    }
  ]
});
formatter.step({
  "name": "User input registered nama userregistered email cobaregister6@yopmail.com and password cobaregister6",
  "keyword": "Given "
});
formatter.match({
  "location": "Daftar.user_input_registered_email(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify unsucess register",
  "keyword": "When "
});
formatter.match({
  "location": "Daftar.user_verify_unsucess_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Register w/ unregister user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@R002"
    }
  ]
});
formatter.step({
  "name": "User click button masuk",
  "keyword": "Given "
});
formatter.step({
  "name": "User input unregister nama \u003cnama\u003e email \u003cunregisteremail\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User click button daftar",
  "keyword": "And "
});
formatter.step({
  "name": "user verify success register",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "unregisteremail",
        "password"
      ]
    },
    {
      "cells": [
        "user unregistered",
        "cobaregister15@yopmail.com",
        "cobaregister15"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register w/ unregister user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Daftar"
    },
    {
      "name": "@R002"
    }
  ]
});
formatter.step({
  "name": "User click button masuk",
  "keyword": "Given "
});
formatter.match({
  "location": "Daftar.User_click_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input unregister nama user unregistered email cobaregister15@yopmail.com and password cobaregister15",
  "keyword": "When "
});
formatter.match({
  "location": "Daftar.user_input_unregister_email(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button daftar",
  "keyword": "And "
});
formatter.match({
  "location": "Daftar.user_click_button_daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify success register",
  "keyword": "And "
});
formatter.match({
  "location": "Daftar.user_verify_sucess_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test Login without unregistered user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@L001"
    }
  ]
});
formatter.step({
  "name": "User input username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User click login",
  "keyword": "And "
});
formatter.step({
  "name": "Display pop up warning unregistered username to user",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
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
        "binarqa12@gmail.com",
        "students1234"
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
  "name": "User click button masuk",
  "keyword": "Given "
});
formatter.match({
  "location": "Daftar.User_click_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Login without unregistered user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@L001"
    }
  ]
});
formatter.step({
  "name": "User input username binarqa12@gmail.com and password students1234",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display pop up warning unregistered username to user",
  "keyword": "And "
});
formatter.match({
  "location": "Login.display_pop_up_warning_unregistered_username_to_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test Login with Invalid Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@L002"
    }
  ]
});
formatter.step({
  "name": "User input username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User click login",
  "keyword": "And "
});
formatter.step({
  "name": "Display pop up warning invalid password to user",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
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
        "binarqae1@gmail.com",
        "students12345"
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
  "name": "User click button masuk",
  "keyword": "Given "
});
formatter.match({
  "location": "Daftar.User_click_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Login with Invalid Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@L002"
    }
  ]
});
formatter.step({
  "name": "User input username binarqae1@gmail.com and password students12345",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display pop up warning invalid password to user",
  "keyword": "And "
});
formatter.match({
  "location": "Login.display_pop_up_warning_invalid_password_to_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test Login with unverif email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@L003"
    }
  ]
});
formatter.step({
  "name": "User input username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User click login",
  "keyword": "And "
});
formatter.step({
  "name": "Display pop up warning unverif username",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
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
        "cobaregister9@yopmail.com",
        "cobaregister9"
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
  "name": "User click button masuk",
  "keyword": "Given "
});
formatter.match({
  "location": "Daftar.User_click_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Login with unverif email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@L003"
    }
  ]
});
formatter.step({
  "name": "User input username cobaregister9@yopmail.com and password cobaregister9",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display pop up warning unverif username",
  "keyword": "And "
});
formatter.match({
  "location": "Login.display_pop_up_warning_unverif_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test Login with Valid Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@L004"
    }
  ]
});
formatter.step({
  "name": "User input username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User click login",
  "keyword": "And "
});
formatter.step({
  "name": "User navigate to homepage",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
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
        "cobaregister6@yopmail.com",
        "cobaregister6"
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
  "name": "User click button masuk",
  "keyword": "Given "
});
formatter.match({
  "location": "Daftar.User_click_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Login with Valid Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@L004"
    }
  ]
});
formatter.step({
  "name": "User input username cobaregister6@yopmail.com and password cobaregister6",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to homepage",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_navigate_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Logout.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Logout"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Logout"
    },
    {
      "name": "@Logout-01"
    }
  ]
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logout",
  "keyword": "When "
});
formatter.match({
  "location": "Logout.User_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Nego.feature");
formatter.feature({
  "name": "Bid Feature",
  "description": "  I want to bid the product",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Nego"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Nego with valid price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Nego"
    },
    {
      "name": "@N-01"
    }
  ]
});
formatter.step({
  "name": "User click on the product card1",
  "keyword": "When "
});
formatter.match({
  "location": "Nego.User_click_on_the_product_card1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on button buy product",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_click_on_button_buy_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input valid price",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_input_valid_price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button kirim",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_click_button_kirim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User success bidding the product",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_success_bidding_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Nego with inputing charachter not an number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Nego"
    },
    {
      "name": "@N-02"
    }
  ]
});
formatter.step({
  "name": "User click on the product card2",
  "keyword": "When "
});
formatter.match({
  "location": "Nego.User_click_on_the_product_card2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on button buy product",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_click_on_button_buy_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input character on price field",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_input_character_on_price_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button kirim",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_click_button_kirim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should\u0027nt success bidding the product",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_shouldnt_success_bidding_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Nego with inputing more than real price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Nego"
    },
    {
      "name": "@N-03"
    }
  ]
});
formatter.step({
  "name": "User click on the product card3",
  "keyword": "When "
});
formatter.match({
  "location": "Nego.User_click_on_the_product_card3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on button buy product",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_click_on_button_buy_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input field price with more than nominal of the normal price",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_input_field_price_with_more_than_nominal_of_the_normal_price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button kirim",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_click_button_kirim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should\u0027nt success bidding the product",
  "keyword": "And "
});
formatter.match({
  "location": "Nego.User_shouldnt_success_bidding_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Produk Diminati.feature");
formatter.feature({
  "name": "accept or reject buyer\u0027s bid",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProdukDiminati"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "terima nego",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProdukDiminati"
    },
    {
      "name": "@PD-01"
    }
  ]
});
formatter.step({
  "name": "User click burger icon01",
  "keyword": "When "
});
formatter.match({
  "location": "ProdukDiminati.User_click_burger_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button diminati01",
  "keyword": "And "
});
formatter.match({
  "location": "ProdukDiminati.User_click_button_diminati()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click card product01",
  "keyword": "And "
});
formatter.match({
  "location": "ProdukDiminati.User_click_card_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button terima01",
  "keyword": "And "
});
formatter.match({
  "location": "ProdukDiminati.User_click_button_terima()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User success terima nego pembeli",
  "keyword": "And "
});
formatter.match({
  "location": "ProdukDiminati.User_success_terima_nego_pembeli()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Terima jual",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProdukDiminati"
    },
    {
      "name": "@PD-02"
    }
  ]
});
formatter.step({
  "name": "User click burger icon02",
  "keyword": "When "
});
formatter.match({
  "location": "ProdukDiminati.User_click_burger_icon02()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button diminati02",
  "keyword": "And "
});
formatter.match({
  "location": "ProdukDiminati.User_click_button_diminati02()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click card product02",
  "keyword": "And "
});
formatter.match({
  "location": "ProdukDiminati.User_click_card_product02()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button terima02",
  "keyword": "And "
});
formatter.match({
  "location": "ProdukDiminati.User_click_button_terima02()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User success tolak nego pembeli",
  "keyword": "And "
});
formatter.match({
  "location": "ProdukDiminati.User_success_tolak_nego_pembeli()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Profile.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Profile"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check UI Profile",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Profile"
    },
    {
      "name": "@B001"
    }
  ]
});
formatter.step({
  "name": "User click account",
  "keyword": "When "
});
formatter.match({
  "location": "Profile.User_click_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click profile",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.User_click_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify component",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.user_verify_component()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click home",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.user_click_home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Submit Change Profile",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Profile"
    },
    {
      "name": "@B002"
    }
  ]
});
formatter.step({
  "name": "User click account",
  "keyword": "When "
});
formatter.match({
  "location": "Profile.User_click_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click profile",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.User_click_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik submit",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.user_klik_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify success change profile",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.verify_success_change_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click home",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.user_click_home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/SellProduct.feature");
formatter.feature({
  "name": "Sell Product",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SellProduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Success Add New Sell Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@A001"
    }
  ]
});
formatter.step({
  "name": "Click + Jual button",
  "keyword": "When "
});
formatter.step({
  "name": "Input correct Nama Produk, Harga Produk, Kategori and Deskripsi",
  "keyword": "And "
});
formatter.step({
  "name": "Click Terbitkan button",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
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
        "binarqae1@gmail.com",
        "students1234"
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
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Success Add New Sell Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SellProduct"
    },
    {
      "name": "@A001"
    }
  ]
});
formatter.step({
  "name": "Click + Jual button",
  "keyword": "When "
});
formatter.match({
  "location": "SellProduct.click_Jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input correct Nama Produk, Harga Produk, Kategori and Deskripsi",
  "keyword": "And "
});
formatter.match({
  "location": "SellProduct.input_correct_Nama_Produk_Harga_Produk_Kategori_and_Deskripsi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "SellProduct.click_Terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Failed Add New Sell Product (wrong format Harga Produk)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SellProduct"
    },
    {
      "name": "@A002"
    }
  ]
});
formatter.step({
  "name": "Click + Jual button",
  "keyword": "When "
});
formatter.match({
  "location": "SellProduct.click_Jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input Nama Produk, wrong format Harga Produk, Kategori and Deskripsi",
  "keyword": "And "
});
formatter.match({
  "location": "SellProduct.input_Nama_Produk_wrong_format_Harga_Produk_Kategori_and_Deskripsi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "SellProduct.click_Terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Failed Add New Sell Product (not input Nama Produk)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SellProduct"
    },
    {
      "name": "@A003"
    }
  ]
});
formatter.step({
  "name": "Click + Jual button",
  "keyword": "When "
});
formatter.match({
  "location": "SellProduct.click_Jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input Harga Produk, Kategori and Deskripsi",
  "keyword": "And "
});
formatter.match({
  "location": "SellProduct.input_Harga_Produk_Kategori_and_Deskripsi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "SellProduct.click_Terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/TKategori.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TKategori"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User checking all categories",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TKategori"
    },
    {
      "name": "@K001"
    }
  ]
});
formatter.step({
  "name": "User klik kategori Hoby",
  "keyword": "When "
});
formatter.match({
  "location": "TKategori.User_klik_kategori_Hoby()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User klik kategori Kendaraan",
  "keyword": "And "
});
formatter.match({
  "location": "TKategori.User_klik_kategori_Kendaraan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User klik kategori Baju",
  "keyword": "And "
});
formatter.match({
  "location": "TKategori.User_klik_kategori_Baju()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User klik kategori Elektronik",
  "keyword": "And "
});
formatter.match({
  "location": "TKategori.User_klik_kategori_Elektronik()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User klik kategori Kesehatan",
  "keyword": "And "
});
formatter.match({
  "location": "TKategori.User_klik_kategori_Kesehatan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtering by All Categories success",
  "keyword": "And "
});
formatter.match({
  "location": "TKategori.Filtering_by_All_Categories_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Daftar.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User login",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.User_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User try to filter one of the categories",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TKategori"
    },
    {
      "name": "@K002"
    }
  ]
});
formatter.step({
  "name": "User klik kategori Semua",
  "keyword": "When "
});
formatter.match({
  "location": "TKategori.User_klik_kategori_Semua()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User success filter Semua Categories",
  "keyword": "Then "
});
formatter.match({
  "location": "TKategori.User_verify_element()"
});
formatter.result({
  "status": "passed"
});
});