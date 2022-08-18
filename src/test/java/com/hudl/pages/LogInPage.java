package com.hudl.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hudl.utils.BaseClass;
import com.hudl.utils.CommonMethods;

public class LogInPage extends BaseClass {



	@FindBy(id="email")
	public WebElement userName;
	
	@FindBy(id="password")
	public WebElement password;
	
	@FindBy(id="logIn")
	public WebElement loginButton;
	
	@FindBy(xpath="//*[@data-qa-id='error-display']")
	public WebElement errorMessage;
	
	public LogInPage() {
		PageFactory.initElements(driver, this);
		
	}
	
	

}
