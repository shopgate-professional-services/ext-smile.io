# Shopgate Connect - Smile.io

This extension integrates a Shopgate app with [Smile.io](https://https://smile.io/). Smile.io loyalty points as well as redemption options will be displayed within the app. Loyalty point redemption will take place with Shopify WebCheckout. 

## Demo & Examples
[See here](demo/index.md)

## Configuration
In order to integrate with smile.io we had to mimic the complete smile dashboard with custom pages and created many configurations that can be used to recreate desktop styling in app.

- `fontFamily` (object): Font definitions for dashboard.
  - `secondaryFontFamily` (string): font family style info for secondary text
  - `secondaryFontFamilyUrl` (string): secondary font family that must be loaded
  - `primaryFontFamily` (string): font family style info for primary text
  - `primaryFontFamilyUrl` (string): primary font family that must be loaded
#### Default Value:
```json
"fontFamily": {
  "secondaryFontFamily": "Poppins,arial,sans-serif",
  "secondaryFontFamilyUrl": "https://fonts.googleapis.com/css?family=Poppins&display=swap",
  "primaryFontFamily": "Poppins,arial,sans-serif",
  "primaryFontFamilyUrl": "https://fonts.googleapis.com/css?family=Poppins&display=swap"
}
```

- `imageSrcs` (object): Images src values to be used as icons in SmileDashboard.
  - `waysToEarn` (string): svg that should be used from sweetooth url for waysToEarn. Configurable based on what icon the merchant is using
  - `waysToSpend` (string): svg that should be used from sweetooth url for waysToSpend. Configurable based on what icon the merchant is using
#### Default Value:
```json
"imageSrcs": {
  "waysToEarn": "https://cdn.sweettooth.io/v1/images/earn-more-points.svg?color=%23000000&theme=light",
  "waysToSpend": "https://cdn.sweettooth.io/v1/images/spend-your-points.svg?color=%23000000&theme=light"
}
```

- `colorConfig` (object): Assorted color values for SmileDashboard.
  - `headerBackground` (string): background color for header section in Smile Dashboard
  - `headerFontColor` (string): font color for header section in Smile Dashboard
  - `buttonBackground` (string): button background color for buttons in Smile Dashboard
  - `buttonFontColor` (string): button font color for buttons in Smile Dashboard
  - `contentBackground` (string): background color for content section in Smile Dashboard
  - `contentFontColor` (string): font color for content section in Smile Dashboard
  - `mutedPointsColor` (string): font color for muted subtext in Smile Dashboard.
#### Default Value:
```json
"colorConfig":{
  "headerBackground": "black",
  "headerFontColor": "white",
  "buttonBackground": "black",
  "buttonFontColor": "white",
  "contentBackground": "white",
  "contentFontColor": "black",
  "mutedPointsColor": "#707070"
}
```

- `loginPageText` (object): text values for SmileDashboard
  - `headerText` (object): text for header section in non logged-in smile dashboard view
    - `secondaryText` (string) secondary text for header section
    - `primaryText` (string) primary text for header section
  - `pointsText` (object): text for points section in non logged-in smile dashboard view
    - `header` (string) header title text for points section
    - `paragraph` (string) pagraph text for points section
  - `memberText` (object): text for become a member section in non logged-in smile dashboard view
    - `header` (string) header title text for become a member section
    - `paragraph` (string) pagraph text for become a member section
#### Default Value:
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

- `smileApiUrl` (string): Smile Api access point
#### Default Value:
```json
{
  "smileApiUrl": "https://api.sweettooth.io/v1"
}
```

- `smileApiSecret` (string): Smile Api secret key
#### Default Value:
```json
{
  "smileApiSecret": "1234example"
}
```

- `smileChannelApiKey` (string): Smile Api channel key
#### Default Value:
```json
{
  "smileChannelApiKey": "1234example"
}
```

- `showFixedDashboardButton` (bool): Flag ror the fixed dashboard button should be shown at the bottom of the pages like on desktop.
#### Default Value:
```json
{
  "showFixedDashboardButton": false
}
```

- `fixedDashboardButtonUrlBlacklist` (array): Blacklist for urls where the button should not been shown.
#### Default Value:
```json
{
  "fixedDashboardButtonUrlBlacklist": [
        "/item/:productId/gallery/:slide",
        "/login"
      ],
}
```

- `fixedDashboardButtonStyling` (object): Styling for the fixed dashboard button at the bottom
  - `bgColor` (string): Background color of the Button
  - `iconUrl` (string): Base url of the icon that should be shown in the button
  - `iconColor` (string): Color of the icon
  - `position` (string): Position of the button. Possible values are `right` (right bottom corner) or `left` ((left bottom corner)).
#### Default Value:
```json
{
  "fixedDashboardButtonStyling": {
    "bgColor": "#000000",
    "iconUrl": "https://cdn.sweettooth.io/v1/images/launcher_icons/bag.svg?color=",
    "iconColor": "#FFFFFF",
    "position": "right"
  }
}
```

- `addLinksToMenu` (bool): Adds a link to the smile dashboard to the Navdrawer (GMD) and Tabbar (iOS).
#### Default Value:
```json
{
  "addLinksToMenu": true
}
```

- `smileTTL` (number): Value for caching smile info.
#### Default Value:
```json
{
  "smileTTL": 60000
}
```

- `smileDataTTL` (number): Value for caching smile data info like ways to earn and ways to spend.
#### Default Value:
```json
{
  "smileDataTTL": 604800000
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.
