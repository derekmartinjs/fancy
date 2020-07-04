# Fancy 

#### An iOS app to manage personal finances and share expenses with friends and partners

## Features

* Categorize personal finance transactions
* Share expenses with friends and partners
* Search financial transaction history easily 
* Set and track monthly budgets by categories 
* Help track Venmo, Amazon, and other hard to identify transactions
* Show complete financial performance by month and year
* Track subscriptions in one place (especially shared subscriptions)
* Send push notifications for key events such as
  * New uncategorized transactions 
  * New Venmo/Amazon transactions/payments 
  * Alerts for both positive and negative budget trends 

## APIs and other services (these are what power the app)

* React Native 
* [Firebase](https://firebase.google.com/docs/ios/setup?authuser=0) 
  * Authentication
    * **Google OAuth** 
  * Firestore (database)
    * Collections:
      * **users**
      * **budgets**
      * **categories**
      * **transactions**
      * **subscriptions**
      * **shared_expenses**
      * **vendors**
      * **accounts**
      * **user_to_user**
      * **user_to_transaction**
      * **user_to_budget** 
  * Push Notifications
* [Plaid (for financial transactions)](https://plaid.com/docs/)
* [BigQuery](https://cloud.google.com/bigquery/docs/reference/rest) 
* Google Sheets API (possibly for manual uploads)
* React Native Paper
* [React Native Chart Kit](https://www.npmjs.com/package/react-native-chart-kit) 
* [Venmo API (if possible)](https://developers.braintreepayments.com/guides/client-sdk/setup/ios/v4)

## Screens

* Home Screen
* Transactions Screen
* Budget Screen
* Shared Transactions
* Subscriptions
* Settings Screen



## File Structure

* Below is the way we are organizing this app:
* **/root**
  * **/android**
    * Android related files
  * **/ios**
    * iOS related files 
  * **/docs** 
    * App documentation
  * **/scripts**
    * Various scripts needed to run the app
  * **/src**
    * **/screens** 
      * **/signed-in**
        * Home
        * Transactions
        * Transaction
        * Budget
        * Profile
        * Shared
        * Subscriptions
        * Settings
        * Stack
      * **/signed-out** 
        * SignIn
        * Stack
    * /**components**
      * SearchBar
    * /**utils**
    * theme.ts