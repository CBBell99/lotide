# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cbbell99/lotide`

**Require it:**

`const _ = require('@cbbell99/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first item in index 0 of an array
* `tail(...)`: returns the every item in an array except the first
* `middle(...)`: returns the item in the middle of an array or the 2 items in the middle of an array