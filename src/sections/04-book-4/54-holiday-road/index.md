# Holiday Road from Nashville

You and your teammates have been contracted by the National Parks Service to build an application that will allow people to build itineraries for their trips to the beautiful national parks that they maintain. The starting point of each trip will be Nashville, TN, but the destination will a national park selected by the user.

## Learning Objectives

This project will focus on the following concepts:

1. Working with public <analogy>API</analogy> data from multiple sources.
1. Using an <analogy>API client</analogy> to communicate with, and explore, 3rd-party APIs before you start coding (e.g. [Thunder <analogy>Client</analogy> or Postman](../../../supplement-api/chapters/API_CLIENTS.md)).
1. Building a user experience (UX) that is tailored to a specific demographic.

## Feature List

### Building the Itinerary

* List all national parks in a <analogy>dropdown</analogy>. When user chooses one, display the name of the park in the **Itinerary Preview** section.

* List all bizarraries in a <analogy>dropdown</analogy>. When user chooses one, display the name of the bizarre attraction in the **Itinerary Preview** section.

* List all eateries in a <analogy>dropdown</analogy>. When user chooses one, display the name of the eatery in the **Itinerary Preview** section.

### Itinerary Details

* In the **Itinerary Preview** section, there should be a button labeled _Save Itinerary_. It should be disabled by default.
* When the user has selected a park, and the name of the park has been added to the **Itinerary Preview** section, query the Open Weather <analogy>API</analogy> and display the 5 day forecast for that location. This will allow the user to see if they want to make the trip soon.
* When the user adds any item to the **Itinerary Preview**, there should be a _Details_ button next to the name of the item.

* When the user clicks on any detail button for an itinerary item, a dialog box should be presented to the user with more information about that item _(description, address, etc...)_.
* Once the user has selected a park, a bizarre attraction, and an eatery, the _Save Itinerary_ button should be enabled.
* When the user clicks the _Save Itinerary_ button, the chosen items should be saved as an <analogy>object</analogy> in your own, local <analogy>API</analogy> that is managed by `json-server`. Each saved itinerary should appear in an aside bar on the right side of the UI.

### Stretch Goal: Directions

Only after the main fetures of the application listed above are complete, you can work on the stretch goal of providing directions. For this feature, you will be using the Graphhopper <analogy>API</analogy>.

Once the user has saved an itinerary, and it is listed on the aside bar, refactor your application to add a _Get Directions_ button to each HTML representation of the itinerary. When the user clicks that button for an itinerary, the user should be presented with step-by-step instructions for the trip. It should include

* All 4 locations _(Nashville, bizarrerie, eatery, and national park)_ need to be sent to Geocoding <analogy>API</analogy> to the the latitude and longitude for each one.

* Then all 4 lat/long pairs should be in the URL for the <analogy>request</analogy> to the Routing <analogy>API</analogy>.
* The step-by-step instructions in the <analogy>response</analogy> from the Routing <analogy>API</analogy> should be displayed below the **Itinerary Preview** section.

## Getting Started

If your team chooses to work on this project, inform your coaching team, and they will get you started.