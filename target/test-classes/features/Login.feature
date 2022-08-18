@login
Feature: Login

@login1
  Scenario: Hudl valid login
    Given I enter valid username and password
    And I click login button
    Then I successfully logged in

  @regression
  Scenario Outline: Invalid login
    Given I enter invalid "<userName>" and "<Password>"
    And I click login button
    Then I see "<errorMessage>" is displayed

    Examples: 
      | userName | Password | errorMessage                                              |
      | Admin    | Admin    | We didn't recognize that email and/or password.Need help? |
      | Admin    |          | We didn't recognize that email and/or password.Need help? |
      |          | Admin    | We didn't recognize that email and/or password.Need help? |
