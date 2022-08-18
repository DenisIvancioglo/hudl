package com.hudl.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hudl.utils.CommonMethods;

public class HomePage extends CommonMethods  {
	
	@FindBy(xpath="//span[text()='Home']")
	public WebElement homeButton;
	
	public HomePage() {
		PageFactory.initElements(driver, this);

	}
}
