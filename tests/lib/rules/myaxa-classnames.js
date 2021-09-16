/**
 * @fileoverview Classnames must use prefixClass function.
 * @author Branislav
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/myaxa-classnames");
const RuleTester = require("eslint").RuleTester;


RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  }
});

const ERROR_MSG_NOT_USED = 'className must use prefixClass function';


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("myaxa-classnames", rule, {
  valid: [
    {
      code: '<div className={prefixClass("myClassName")}></div>',
    },
    {
      code: '<span attr-custom="true" className={prefixClass("myClass")}></span>',
    },
    {
      code: '<div className={prefixClass("myClass", "classTwo")}></div>',
    },
    {
      code: '<MyComponent className={prefixClass("myClass", "classTwo")} />',
    },
  ],

  invalid: [
    {
      code: '(<div className={"myClassName"}></div>)',
      errors: [{ message: ERROR_MSG_NOT_USED, type: "JSXAttribute" }],
    },
    {
      code: '(<div className="myClass"></div>)',
      errors: [{ message: ERROR_MSG_NOT_USED, type: "JSXAttribute" }],
    },
    {
      code: '(<span className="myClass"></span>)',
      errors: [{ message: ERROR_MSG_NOT_USED, type: "JSXAttribute" }],
    },
    {
      code: '(<div className={classnames("myClass")}></div>)',
      errors: [{ message: ERROR_MSG_NOT_USED, type: "JSXAttribute" }],
    }
  ],
});
