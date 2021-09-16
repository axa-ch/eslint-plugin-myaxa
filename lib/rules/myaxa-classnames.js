/**
 * @fileoverview Classnames must use prefixClass function.
 * @author Branislav
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "className must use prefixClass function",
      category: "CSS Prefixing",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    const report = (n) => context.report({
      node: n,
      message: 'className must use prefixClass function',
    });

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      JSXAttribute(node) {
        // pick all classname attribute
        if (node.name.name == "className") {
          if (node.value.type == "Literal") {
            report(node, 'JSXAttribute');
          }
          // value is expresion
          if (node.value.type == "JSXExpressionContainer") {
            const expression = node.value.expression;
            // in expresion is Literal
            if (expression.type == "Literal") {
              report(node);
            }
            // in expression is function, but not correct one
            if (
              expression.type == "CallExpression" &&
              expression.callee.name != "prefixClass"
            ) {
              report(node);
            }
          }
        }
      },
    };
  },
};
