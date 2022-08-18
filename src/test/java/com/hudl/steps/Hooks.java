package com.hudl.steps;

import com.hudl.utils.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	@Before
	public void start(Scenario scenario) {
		BaseClass.setUp();
		System.out.println("Start test:" + scenario.getName());
	}

	@After
	public void end(Scenario scenario) {
		System.out.println("Ending test:" + scenario.getName());

		BaseClass.tearDown();
	}

}
