// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

var content, controller;

// ..........................................................
// NULL ARRAY
// 

suite("SC.ObjectController - empty_case - NULL", {
  setup: function() {
    content = null;
    controller = SC.ObjectController.create({ content: content });
  },
  
  teardown: function() {
    controller.destroy();
  }
});

test("getting any value should return undefined", function() {
  equals(controller.get("foo"), undefined, 'controller.get(foo)');
  equals(controller.get("bar"), undefined, 'controller.get(bar)');
});

test("setting any unknown value should have no effect", function() {
  equals(controller.set("foo", "FOO"), controller, 'controller.set(foo, FOO) should return self');  
  equals(controller.set("bar", "BAR"), controller, 'controller.set(bar, BAR) should return self');
  equals(controller.get("foo"), undefined, 'controller.get(foo)');
  equals(controller.get("bar"), undefined, 'controller.get(bar)');
});

test("hasContent", function() {
  equals(controller.get("hasContent"), false, 'hasContent should be false');
});


// ..........................................................
// EMPTY ARRAY
// 

suite("SC.ObjectController - empty_case - EMPTY ARRAY", {
  setup: function() {
    content = null;
    controller = SC.ObjectController.create({ content: content });
  },
  
  teardown: function() {
    controller.destroy();
  }
});

test("getting any value should return undefined", function() {
  equals(controller.get("foo"), undefined, 'controller.get(foo)');
  equals(controller.get("bar"), undefined, 'controller.get(bar)');
});

test("setting any unknown value should have no effect", function() {
  equals(controller.set("foo", "FOO"), controller, 'controller.set(foo, FOO) should return self');  
  equals(controller.set("bar", "BAR"), controller, 'controller.set(bar, BAR) should return self');
  equals(controller.get("foo"), undefined, 'controller.get(foo)');
  equals(controller.get("bar"), undefined, 'controller.get(bar)');
});


test("hasContent", function() {
  equals(controller.get("hasContent"), false, 'hasContent should be false');
});

test("allowsMultipleContent should have no effect", function() {
  controller = SC.ObjectController.create({ 
    content: content,
    allowsMultipleContent: true
  });
  
  equals(controller.get("length"), undefined, "controller.get(length)");
  equals(controller.get('hasContent'), false, 'controller.hasContent');
});
