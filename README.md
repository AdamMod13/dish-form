# Dish Form Using Redux-Form

## Brief Description

This is a form that allows the user to input the details of a dish, such as its name, preparation time, type, and additional details that depend on the type of dish. The form is submitted via a POST request in JSON format to a specified API endpoint.

## Getting Started

Prerequisites: 
* Node.js v16.14.0 or higher
* npm v8.3.1 or higher


## Installation
* Clone the repository and navigate to the project directory.
  ``` 
  git clone https://github.com/AdamMod13/dish-form.git
  cd dish-form 
  ```
* Install the project dependencies.
  ```
  npm install
  ```
* Start the development server.
  ```
  npm start 
  ```
* Open the web browser and go to http://localhost:3000 to view the form.


## Tech Stack

* React.js
* Redux
* TypeScript
* Tailwind 



## Usage/Examples

The form consists of three main fields and few additional depending on the selected dish type (**All Fields Are Required**):

* **Name:** a text field for the name of the dish.
* **Preparation time:** a duration field for the preparation time of the dish.
* **Type:** a select field with three options: pizza, soup, and sandwich. Choosing a type will reveal additional fields that are specific to that type of dish.
* **Additional fields:** 
  * for pizza: number of slices, diameter
  * for soup: spiciness scale
  * for sandwich: slices of bread

To submit the form, click the "Submit" button. If there are any validation errors, they will be displayed in right bottom corner. Otherwise, the form data will be submitted as a JSON object to the specified API endpoint and form fields are cleared.