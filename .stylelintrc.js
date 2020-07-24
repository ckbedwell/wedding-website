/*
  Some of these are order sensitive
*/

module.exports = {
  "ignoreFiles": ["**/*.js"],
  "rules": {
    "at-rule-no-unknown": true,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "comment-no-empty": true,
    "declaration-block-no-duplicate-properties": [true, {
      ignore: ["consecutive-duplicates-with-different-values"]
    }],
    "declaration-block-no-duplicate-properties": [true, {
      "ignoreProperties": ["composes"]
    }],
    "declaration-block-no-redundant-longhand-properties": [true, {
      "ignoreShorthands": ["font"]
    }],
    "color-no-hex": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-no-important": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "font-weight-notation": "numeric",
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "indentation": 2,
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-nesting-depth": 3,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "number-no-trailing-zeros": true,
    "property-blacklist": ["float", "font", "line-height"],
    "property-case": "lower",
    "property-no-vendor-prefix": true,
    "selector-max-compound-selectors": 5,
    "selector-max-id": 0,
    "selector-max-universal": 1,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "string-no-newline": true,
    "unit-blacklist": ["em"],
    "unit-no-unknown": true,
    "value-keyword-case": ["lower", {
      "ignoreProperties": ["composes", "backgroundColor"]
    }],
  }
}
