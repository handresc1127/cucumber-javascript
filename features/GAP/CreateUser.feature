Feature: Vacation Management

Scenario: Verification home page

    Given A web browser is at the Vacations Management
    When Login into Vacations Management
    And Go to option create a new user
    And Create the user "James Smith"
# And creater an user with follow data
#      | FullName    | id           | startDate    | Leader        |
#      |"James Smith"| "1234567890" | "21-01-2014" | "Henry Correa"|
#    
#
    And Set the identification "1234567890"
    And Set date-starts with "21-01-2015"
    And Set the leader field with "Henry Andres Correa Correa"
    And Set the email address with "h.andresc1127@gmail.com"
    And Save the user
    Then Verify the before user "Henry Andres Correa Correa" exist
    And Return user row "Henry Andres Correa Correa"
    And Delete before user "Henry Andres Correa Correa"
    And Verify user was deleted "Henry Andres Correa Correa"
