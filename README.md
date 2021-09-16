# myaxa-eslint-plugin

ESlint plugin which contains custom rules, relevant for our project

Currently in contains these rules:

- className must use prefixClass function (myaxa-classnames)

### How to edit existing rules

- Don't forget to increase version and release when you update existing rule

### How to add new rules

- It's good to use `yo` generator to generate boilerplate
  - `npm i -g yo generator-eslint`
- Some references, which I've used during development:
  - https://flexport.engineering/writing-custom-lint-rules-for-your-picky-developers-67732afa1803
  - https://blog.scottlogic.com/2021/09/06/how-to-write-an-es-lint-rule-for-beginners.html
  - https://astexplorer.net/
