package com.hudl.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/features"
		,glue="com/hudl/steps"
		,dryRun=false
		,monochrome=true
		,tags= {"@login"}
		,plugin = {"pretty", "html:target/cucumber-default-reports","json:target/cucumber.json"}
		)
public class Runner {

}
