Feature: Vacation Management

Scenario: Verification home page

    Given A web browser is at the Vacations Management
    When Login into Vacations Management
    And Go to option create a new user
    And Create the user "James Smith"
    And Set the identification "1234567890"
    And Set date-starts with "21-01-2014"
    And Set the leader field with "Henry Correa"
    And Save the user
    Then Verify the before user exist
    And Return user row
    And Delete before user
    And Verify user was deleted
