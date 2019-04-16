Feature: Simple Dummy Application

    Scenario: Incrementing the count
        Given I am on the home page
        When I increment the counter 17 times
        Then I see the current count of 17 displayed

    Scenario: Entering a user name
        Given I am on the home page
        When I supply my name, Steve Russell
        Then I see a personalized greeting for Steve Russell