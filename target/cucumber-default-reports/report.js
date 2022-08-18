$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Hudl valid login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_enter_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter invalid \"\u003cuserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "name": "I see \"\u003cerrorMessage\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "Password",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "Admin",
        "Admin",
        "We didn\u0027t recognize that email and/or password.Need help?"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "We didn\u0027t recognize that email and/or password.Need help?"
      ]
    },
    {
      "cells": [
        "",
        "Admin",
        "We didn\u0027t recognize that email and/or password.Need help?"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid \"Admin\" and \"Admin\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_enter_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"We didn\u0027t recognize that email and/or password.Need help?\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid \"Admin\" and \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_enter_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"We didn\u0027t recognize that email and/or password.Need help?\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid \"\" and \"Admin\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_enter_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"We didn\u0027t recognize that email and/or password.Need help?\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});