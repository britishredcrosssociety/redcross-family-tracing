Feature: Where should we start looking Page
  As a user
  I want to see options on different countries
  So I know inform on where to start looking

  Background:
    Given I visit the "not eligible" page

  Scenario: Has a back link to navigate to the how did you lose contact page
    When I click the "back" link
    Then I am on the "how did you lose contact with your family" page