Feature: Filter result using search input

    Scenario: type word in the search input
        Given I am on the product page
        When I type 'natus nisi omnis corporis facere molestiae rerum in' in the search box
        Then I should see 1 as a search result

    Scenario: clear search input
        Given I am on the product page
        When I type '' in the search box
        Then I should see 10 as a search result