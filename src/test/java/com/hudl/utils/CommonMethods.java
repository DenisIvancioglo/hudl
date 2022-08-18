package com.hudl.utils;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CommonMethods extends BaseClass {

	/**
	 * Method that will wait for element to be visible
	 * 
	 * @param WebElement element, int time
	 */
	public static void waitForElementBeVisible(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOf(element));
	}

	/**
	 * this method will pause the execution by the given seconds
	 * 
	 * @param time
	 */
	public static void waitABit(int time) {
		try {
			Thread.sleep(time * 1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

}
