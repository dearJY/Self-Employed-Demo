##Self-Employed Demo

## Context
Assume all projects can be done remotely/online. You do not need to worry about matching by location. The Buyer with the lowest bid automatically wins the bid when the deadline is reached. Lowest bid is displayed on the project page. 

## How to start the app
- yarn install
- yarn start
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tech Used
- React [Main Functionality]
- React Router [Routing]
- styled-components [Styling]
- Jest with Enzyme [Testing]

## Functionality done
- Home page:
    - check recent projects
    - search projects
    - filter projects by project posting time and expired time
    - bid on projects
- Dashboard page
    - check bidding projects, onGoing projects and finished projects
    - check total earning.
    
## To do
- Home page:
    - pagination
    - filter sidebar on the right
- Project detail page
    - provides detail information
    - more actions like bid, cancel bid, change exsiting bid price etc.
- Dashboard page
    - In "your earning" panel, show earning in trend chart
