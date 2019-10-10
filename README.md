# Shopgate Connect - Smile.io

This extension integrates a Shopgate app with [Smile.io](https://https://smile.io/). Smile.io loyalty points as well as redemption options will be displayed within the app. Loyalty point redemption will take place with Shopify WebCheckout. 

## Configuration
In order to integrate with smile.io we had to mimic the logged out smile dashboard with custom routes. 

The conifguration imageSrcs is required in order to display the ways to earn and ways to spend links on the main dashboard page. These are default images from smile and you can change the color and theme to update styling. Default Values:
```json
"imageSrcs": {
  "waysToEarn": "https://cdn.sweettooth.io/v1/images/earn-more-points.svg?color=%23000000&theme=light",
  "waysToSpend": "https://cdn.sweettooth.io/v1/images/spend-your-points.svg?color=%23000000&theme=light"
}
```

The configuration colorConfig contains variables for various coloring on these custom pages. Default Values:
```json
"colorConfig":{
  "headerBackground": "black",
  "headerFontColor": "white",
  "buttonBackground": "black",
  "buttonFontColor": "white",
  "contentBackground": "white",
}
```

The configuration loginPageText contains required information that need to be maintained to mimic the logged in smile.io dashboard. Default Values:
```json
"loginPageText": {
  "headerText": {
    "secondaryText": "Welcome To",
    "primaryText": "Merlin's magnificent magic shop"
  },
  "pointsText": {
    "header": "Points",
    "paragraph": "Earn more Points for different actions, and turn those Points into awesome rewards!"
  },
  "memberText": {
    "header": "Become a member",
    "paragraph": "With more ways to unlock exciting perks, this is your all access pass to exclusive rewards."
  }
}
```
The configuration waysToSpend only contains text information since we fetch ways to spend events from the smile.io api. Default Values: 
```json
"waysToSpend":{
  "appBarTitle": "Shop Title",
  "header": "Ways to spend"
}
```

The configuration waysToEarn contains text information and the various activites that are allowed by the merchant to earn rewards. The options array mimics the layout for waysToSpend options API reponse. Default Values:
```json
"waysToEarn": {
  "appBarTitle": "Shop Title",
  "header": "Ways to earn",
  "options": [
    {
      "reward": {
        "name": "Place an order",
        "image_url": "https://cdn.sweettooth.io/v1/images/earning/order-online.svg?color=%23000000&theme=light"
      },
      "exchange_description": "1 Point for every $1 spent"
    },
    {
      "reward": {
        "name": "Signup",
        "image_url": "https://cdn.sweettooth.io/v1/images/earning/signup.svg?color=%23000000&theme=light"
      },
      "exchange_description": "200 points"
    },
    {
      "reward": {
        "name": "Celebrate a birthday",
        "image_url": "https://cdn.sweettooth.io/v1/images/earning/birthday.svg?color=%23000000&theme=light"
      },
      "exchange_description": "200 points"
    }
  ]
}
```

smileApiUrl Default Value: 
```json
{
  "smileApiUrl": "https://api.sweettooth.io/v1"
}
```

smileApiSecret Default Value:
```json
{
  "smileApiSecret": "1234example"
}
```

smileChannelApiKey Default Value:
```json
{
  "smileChannelApiKey": "1234example"
}
```

smileJavascriptSdkSrc Default Value:
```json
{
  "smileJavascriptSdkSrc": "https://cdn.sweettooth.io/assets/storefront.js"
}
```

sweettoothInitEndpoint Default Value:
```json
{
  "sweettoothInitEndpoint": "https://cdn.sweettooth.io/v1/storefront_js/init"
}
```
- `showFixedDashboardButton` (bool): Default false. Flag if the fixed dashboard button should be shown at the bottom of the pages like on desktop.

- `fixedDashboardButtonUrlBlacklist` (array): Default `["/item/:productId/gallery/:slide", "/login"]`. Blacklist for urls where the button should not been shown.

- `fixedDashboardButtonStyling` (object): Styling for the fixed dashboard button at the bottom

    - `bgColor` (string): Default `"#000000"`. Background color of the Button
    - `iconUrl` (string): Default `"https://cdn.sweettooth.io/v1/images/launcher_icons/bag.svg?color="`. Base url of the icon that should be shown in the button
    - `iconColor` (string): Default `"#FFFFFF"`. Color of the icon
    - `position` (string): Default `"right"`. Position of the button. Possible values are `right` (right bottom corner) or `left` ((left bottom corner)).
    
- `addLinksToMenu` (bool): Default `true`. Adds a link to the smile dashboard to the Navdrawer (GMD) and Tabbar (iOS).

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.
