# Shopgate Connect - Smile.io

This extension integrates a Shopgate app with [Smile.io](https://https://smile.io/). Smile.io loyalty points as well as redemption options will be displayed within the app. Loyalty point redemption will take place with Shopify WebCheckout. 

## Configuration

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
