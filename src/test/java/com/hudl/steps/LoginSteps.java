package com.hudl.steps;

import com.hudl.pages.HomePage;
import com.hudl.pages.LogInPage;
import com.hudl.utils.CommonMethods;
import com.hudl.utils.ConfigsReader;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps extends CommonMethods {

	LogInPage login = new LogInPage();
	HomePage home = new HomePage();

	@When("I enter valid username and password")
	public void i_enter_valid_username_and_password() {
		login.userName.sendKeys(ConfigsReader.getProperty("username"));
		login.password.sendKeys(ConfigsReader.getProperty("password"));

	}

	@When("I click login button")
	public void i_click_login_button() {
		login.loginButton.click();
	}

	@Then("I successfully logged in")
	public void i_successfully_logged_in() {
		waitABit(5);
		Assert.assertTrue("Successfully logged in", home.homeButton.isDisplayed());

	}

	@When("I enter invalid {string} and {string}")
	public void i_enter_invalid_and(String userName, String password) {
		login.userName.sendKeys(userName);
		login.password.sendKeys(password);

	}

	@Then("I see {string} is displayed")
	public void i_see_is_displayed(String expectedErrorMessage) {
		waitForElementBeVisible(login.errorMessage);
		String actualErrorMessage = login.errorMessage.getText();
		Assert.assertEquals(expectedErrorMessage, actualErrorMessage);
	}
}
