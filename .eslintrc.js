module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },

    "plugins": ["react", "angular"],

    "globals": {
        "describe": false,
        "it": false,
        "before": false,
        "beforeEach": false,
        "after": false,
        "afterEach": false,
        "angular": false
    },

    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": true,
        "regexUFlag": true,
        "regexYFlag": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodeCodePointEscapes": true,
        "globalReturn": true,
        "jsx": true
    },

    "rules": {
        //
        //Possible Errors
        //
        // The following rules point out areas where you might have made mistakes.
        //
        "comma-dangle": 2, // disallow or enforce trailing commas
        "no-cond-assign": 2, // disallow assignment in conditional expressions
        "no-console": 1, // disallow use of console (off by default in the node environment)
        "no-constant-condition": 2, // disallow use of constant expressions in conditions
        "no-control-regex": 2, // disallow control characters in regular expressions
        "no-debugger": 2, // disallow use of debugger
        "no-dupe-args": 2, // disallow duplicate arguments in functions
        "no-dupe-keys": 2, // disallow duplicate keys when creating object literals
        "no-duplicate-case": 2, // disallow a duplicate case label.
        "no-empty": 2, // disallow empty statements
        "no-empty-character-class": 2, // disallow the use of empty character classes in regular expressions
        "no-ex-assign": 2, // disallow assigning to the exception in a catch block
        "no-extra-boolean-cast": 2, // disallow double-negation boolean casts in a boolean context
        "no-extra-parens": 0, // disallow unnecessary parentheses (off by default)
        "no-extra-semi": 2, // disallow unnecessary semicolons
        "no-func-assign": 2, // disallow overwriting functions written as function declarations
        "no-inner-declarations": 2, // disallow function or variable declarations in nested blocks
        "no-invalid-regexp": 2, // disallow invalid regular expression strings in the RegExp constructor
        "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
        "no-negated-in-lhs": 2, // disallow negation of the left operand of an in expression
        "no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal
        "quote-props": 2, // disallow reserved words being used as object literal keys (off by default)
        "no-sparse-arrays": 2, // disallow sparse arrays
        "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
        "use-isnan": 2, // disallow comparisons with the value NaN
        "valid-jsdoc": 2, // Ensure JSDoc comments are valid (off by default)
        "valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string

        //
        // Best Practices
        //
        // These are rules designed to prevent you from making mistakes.
        // They either prescribe a better way of doing something or help you avoid footguns.
        //
        "block-scoped-var": 0, // treat var statements as if they were block scoped (off by default). 0: deep destructuring is not compatible https://github.com/eslint/eslint/issues/1863
        "complexity": 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
        "consistent-return": 2, // require return statements to either always or never specify values
        "curly": 2, // specify curly brace conventions for all control statements
        "default-case": 2, // require default case in switch statements (off by default)
        "dot-notation": 2, // encourages use of dot notation whenever possible
        "eqeqeq": 2, // require the use of === and !==
        "guard-for-in": 2, // make sure for-in loops have an if statement (off by default)
        "no-alert": 2, // disallow the use of alert, confirm, and prompt
        "no-caller": 2, // disallow use of arguments.caller or arguments.callee
        "no-div-regex": 2, // disallow division operators explicitly at beginning of regular expression (off by default)
        "no-else-return": 2, // disallow else after a return in an if (off by default)
        "no-labels": 2, // disallow use of labels for anything other then loops and switches
        "no-eq-null": 2, // disallow comparisons to null without a type-checking operator (off by default)
        "no-eval": 2, // disallow use of eval()
        "no-extend-native": 2, // disallow adding to native types
        "no-extra-bind": 2, // disallow unnecessary function binding
        "no-fallthrough": 2, // disallow fallthrough of case statements
        "no-floating-decimal": 2, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        "no-implied-eval": 2, // disallow use of eval()-like methods
        "no-iterator": 2, // disallow usage of __iterator__ property
        "no-labels": 2, // disallow use of labeled statements
        "no-lone-blocks": 2, // disallow unnecessary nested blocks
        "no-loop-func": 2, // disallow creation of functions within loops
        "no-multi-spaces": 2, // disallow use of multiple spaces
        "no-multi-str": 2, // disallow use of multiline strings
        "no-native-reassign": 2, // disallow reassignments of native objects
        "no-new": 2, // disallow use of new operator when not part of the assignment or comparison
        "no-new-func": 2, // disallow use of new operator for Function object
        "no-new-wrappers": 2, // disallows creating new instances of String,Number, and Boolean
        "no-octal": 2, // disallow use of octal literals
        "no-octal-escape": 2, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-param-reassign": 2, // disallow reassignment of function parameters (off by default)
        "no-process-env": 2, // disallow use of process.env (off by default)
        "no-proto": 2, // disallow usage of __proto__ property
        "no-redeclare": 2, // disallow declaring the same variable more then once
        "no-return-assign": 2, // disallow use of assignment in return statement
        "no-script-url": 2, // disallow use of javascript: urls.
        "no-self-compare": 2, // disallow comparisons where both sides are exactly the same (off by default)
        "no-sequences": 2, // disallow use of comma operator
        "no-throw-literal": 2, // restrict what can be thrown as an exception (off by default)
        "no-unused-expressions": 2, // disallow usage of expressions in statement position
        "no-void": 2, // disallow use of void operator (off by default)
        "no-warning-comments": [0, {
            "terms": ["todo", "fixme"],
            "location": "start"
        }], // disallow usage of configurable warning terms in comments": 2, // e.g. TODO or FIXME (off by default)
        "no-with": 2, // disallow use of the with statement
        "radix": 2, // require use of the second argument for parseInt() (off by default)
        "vars-on-top": 2, // requires to declare all vars on top of their containing scope (off by default)
        "wrap-iife": 2, // require immediate function invocation to be wrapped in parentheses (off by default)
        "yoda": 2, // require or disallow Yoda conditions

        //
        // Strict Mode
        //
        // These rules relate to using strict mode.
        //
        "strict": 0, // controls location of Use Strict Directives. 0: required by `babel-eslint`

        //
        // Variables
        //
        // These rules have to do with variable declarations.
        //
        "no-catch-shadow": 2, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-delete-var": 2, // disallow deletion of variables
        "no-label-var": 2, // disallow labels that share a name with a variable
        "no-shadow": 2, // disallow declaration of variables already declared in the outer scope
        "no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
        "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undef-init": 2, // disallow use of undefined when initializing variables
        "no-undefined": 2, // disallow use of undefined variable (off by default)
        "no-unused-vars": 2, // disallow declaration of variables that are not used in the code
        "no-use-before-define": 2, // disallow use of variables before they are defined

        //
        //Stylistic Issues
        //
        // These rules are purely matters of style and are quite subjective.
        //
        //"indent": [1, 2], // this option sets a specific tab width for your code (off by default)
        // "brace-style": 1, // enforce one true brace style (off by default)
        "camelcase": 1, // require camel case names
        "comma-spacing": [1, {
            "before": false,
            "after": true
        }], // enforce spacing before and after comma
        "comma-style": [1, "last"], // enforce one true comma style (off by default)
        "consistent-this": [1, "_this"], // enforces consistent naming when capturing the current execution context (off by default)
        "eol-last": 1, // enforce newline at the end of file, with no multiple empty lines
        "func-names": 0, // require function expressions to have a name (off by default)
        "func-style": 0, // enforces use of function declarations or expressions (off by default)
        "key-spacing": [1, {
            "beforeColon": false,
            "afterColon": true
        }], // enforces spacing between keys and values in object literal properties
        "max-nested-callbacks": [1, 3], // specify the maximum depth callbacks can be nested (off by default)
        "new-cap": [1, {
            newIsCap: true,
            capIsNew: false
        }], // require a capital letter for constructors
        "new-parens": 1, // disallow the omission of parentheses when invoking a constructor with no arguments
        "newline-after-var": 0, // allow/disallow an empty newline after var statement (off by default)
        "no-array-constructor": 1, // disallow use of the Array constructor
        "no-inline-comments": 1, // disallow comments inline after code (off by default)
        "no-lonely-if": 1, // disallow if as the only statement in an else block (off by default)
        "no-mixed-spaces-and-tabs": 1, // disallow mixed spaces and tabs for indentation
        "no-multiple-empty-lines": [1, {
            "max": 2
        }], // disallow multiple empty lines (off by default)
        "no-nested-ternary": 1, // disallow nested ternary expressions (off by default)
        "no-new-object": 1, // disallow use of the Object constructor
        "no-spaced-func": 1, // disallow space between function identifier and application
        "no-ternary": 0, // disallow the use of ternary operators (off by default)
        "no-trailing-spaces": 1, // disallow trailing whitespace at the end of lines
        "no-underscore-dangle": 1, // disallow dangling underscores in identifiers
        "no-extra-parens": 1, // disallow wrapping of non-IIFE statements in parens
        "one-var": [1, "never"], // allow just one var statement per function (off by default)
        "operator-assignment": [1, "never"], // require assignment operator shorthand where possible or prohibit it entirely (off by default)
        "padded-blocks": [1, "never"], // enforce padding within blocks (off by default)
        "quote-props": [1, "as-needed"], // require quotes around object literal property names (off by default)
        "quotes": [1, "single"], // specify whether double or single quotes should be used
        "semi": [1, "always"], // require or disallow use of semicolons instead of ASI
        "semi-spacing": [1, {
            "before": false,
            "after": true
        }], // enforce spacing before and after semicolons
        "sort-vars": 0, // sort variables within the same declaration block (off by default)
        // "keyword-spacing": [0], // require a space after certain keywords (off by default)
        "space-before-blocks": [1, "always"], // require or disallow space before blocks (off by default)
        //"space-before-function-paren": [1, {"anonymous": "always", "named": "never"}], // require or disallow space before function opening parenthesis (off by default)
        // "object-curly-spacing": [1, "never"], // require or disallow spaces inside brackets (off by default)
        "array-bracket-spacing": [1, "never"], // require or disallow spaces inside brackets (off by default)
        "computed-property-spacing": [1, "never"], // require or disallow spaces inside brackets (off by default)
        "space-in-parens": [1, "never"], // require or disallow spaces inside parentheses (off by default)
        "space-infix-ops": [1], // require spaces around operators
        "space-unary-ops": [1, {
            "words": true,
            "nonwords": false
        }], // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
        "spaced-comment": [1, "always"], // require or disallow a space immediately following the // in a line comment (off by default)
        "wrap-regex": 0, // require regex literals to be wrapped in parentheses (off by default)

        //
        // ECMAScript 6
        //
        // These rules are only relevant to ES6 environments and are off by default.
        //
        "no-var": 2, // require let or const instead of var (off by default)
        "generator-star-spacing": [2, "before"], // enforce the spacing around the * in generator functions (off by default)

        //
        // Legacy
        //
        // The following rules are included for compatibility with JSHint and JSLint.
        // While the names of the rules may not match up with the JSHint/JSLint counterpart,
        // the functionality is the same.
        //
        "max-depth": [2, 3], // specify the maximum depth that blocks can be nested (off by default)
        "max-len": [2, 100, 2], // specify the maximum length of a line in your program (off by default)
        "max-params": [2, 5], // limits the number of parameters that can be used in the function declaration. (off by default)
        "max-statements": 0, // specify the maximum number of statement allowed in a function (off by default)
        "no-bitwise": 0, // disallow use of bitwise operators (off by default)
        "no-plusplus": 2, // disallow use of unary operators, ++ and -- (off by default)

        //
        // eslint-plugin-angular
        //
        // Angular JS specific linting rules for ESLint
        //
        //
        // eslint-plugin-angular
        //
        // Angular JS specific linting rules for ESLint
        //
        "angular/module-getter": 2, //disallow to reference modules with variables and require to use the getter syntax instead angular.module('myModule')
        "angular/module-setter": 2, //disallow to assign modules to variables (linked to module-getter
        "angular/no-private-call": 2, //disallow use of internal angular properties prefixed with $$
        "angular/component-limit": 2, //limit the number of angular components per file (y001)
        "angular/controller-as-route": 1, //require the use of controllerAs in routes or states (y031)
        "angular/controller-as-vm": 1, //require and specify a capture variable for this in controllers (y032)
        "angular/controller-as": 1, //disallow assignments to $scope in controllers (y031)
        "angular/deferred": 2, //use $q(function(resolve, reject){}) instead of $q.deferred
        "angular/di-unused": 2, //disallow unused DI parameters
        "angular/directive-restrict": 1, //disallow any other directive restrict than 'A' or 'E' (y074)
        "angular/empty-controller": 2, //disallow empty controllers
        "angular/no-controller": 1, //disallow use of controllers (according to the component first pattern)
        "angular/no-inline-template": 1, //disallow the use of inline templates
        "angular/no-run-logic": 2, //keep run functions clean and simple (y171)
        "angular/no-services": 2, //disallow DI of specified services for other angular components ($http for controllers, filters and directives)
        "angular/on-watch": 2, //require $on and $watch deregistration callbacks to be saved in a variable
        "angular/prefer-component": 1, //Since AngularJS 1.5, we can use a new API when creating directives
        "angular/no-cookiestore": 2, //use $cookies instead of $cookieStore
        "angular/no-directive-replace": 1, //disallow the deprecated directive replace property
        "angular/no-http-callback": 2, //disallow the $http methods success() and error()
        "angular/component-name": 1, //require and specify a prefix for all component names
        "angular/controller-name": 1, //require and specify a prefix for all controller names (y123, y124)
        "angular/directive-name": 1, //require and specify a prefix for all directive names (y073, y126)
        "angular/file-name": 1, //require and specify a consistent component name pattern (y120, y121)
        "angular/filter-name": 1, //require and specify a prefix for all filter names
        "angular/module-name": 1, //require and specify a prefix for all module names (y127)
        "angular/service-name": 1, //require and specify a prefix for all service names (y125)
        "angular/di-order": 1, //require DI parameters to be sorted alphabetically
        "angular/di": [2, "array"], //require a consistent DI syntax
        "angular/dumb-inject": 2, //unittest inject functions should only consist of assignments from injected values to describe block variables
        "angular/function-type": 2, //require and specify a consistent function style for components ('named' or 'anonymous') (y024)
        "angular/module-dependency-order": 2, //require a consistent order of module dependencies
        "angular/no-service-method": 2, //use factory() instead of service() (y040)
        "angular/one-dependency-per-line": 2, //require all DI parameters to be located in their own line
        "angular/rest-service": [2, "$http"], //disallow different rest service and specify one of '$http', '$resource', 'Restangular'
        "angular/watchers-execution": [2, '$apply'], //require and specify consistent use $scope.digest() or $scope.apply()
        "angular/angularelement": 2, //use angular.element instead of $ or jQuery
        "angular/definedundefined": 1, //use angular.isDefined and angular.isUndefined instead of other undefined checks
        "angular/document-service": 2, //use $document instead of document (y180)
        "angular/foreach": 2, //use angular.forEach instead of native Array.prototype.forEach
        "angular/interval-service": 2, //use $interval instead of setInterval (y181)
        "angular/json-functions": 1, //use angular.fromJson and 'angular.toJson' instead of JSON.parse and JSON.stringify
        "angular/log": 2, //use the $log service instead of the console methods
        "angular/no-angular-mock": 1, //require to use angular.mock methods directly
        "angular/no-jquery-angularelement": 2, //disallow to wrap angular.element objects with jQuery or $
        "angular/timeout-service": 2, //use $timeout instead of setTimeout (y181)
        "angular/typecheck-array": 2, //use angular.isArray instead of typeof comparisons
        "angular/typecheck-date": 2, //use angular.isDate instead of typeof comparisons
        "angular/typecheck-function": 2, //use angular.isFunction instead of typeof comparisons
        "angular/typecheck-number": 2, //use angular.isNumber instead of typeof comparisons
        "angular/typecheck-object": 2, //use angular.isObject instead of typeof comparisons
        "angular/typecheck-string": 2, //use angular.isString instead of typeof comparisons
        "angular/window-service": 2, //use $window instead of window (y180)
    }
}
