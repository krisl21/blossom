// ========================================================================
// View metrics Unit Tests
// ========================================================================
/*globals module test ok isObj equals expects */

/**
  These tests verify that all view metrics -- frame, clippingFrame,
  isVisibleInWindow, etc. are correct.
*/

// ..........................................................
// BASE TESTS
// 
// These tests exercise the API.  See below for tests that cover edge 
// conditions.  If you find a bug, we recommend that you add a test in the 
// edge case section.

var FRAME = { x: 10, y: 10, width: 30, height: 30 } ;

var pane, view ; // test globals

suite("isVisibleInWindow", {
  
  setup: function() {
    pane = SC.MainPane.create() ;
    view = SC.View.create() ; 
  },
  
  teardown: function() {
    view = null ;
    pane.remove() ;
    pane = null ;
  }
  
});

test("a new view should not be visible initially", function() {
  ok(view.get('isVisible'), "view.get('isVisible') === false") ;
});

test("adding a new view to a visible pane should make it visible", function() {
  ok(view.get('isVisible'), "view.get('isVisible') === true") ;
  ok(pane.get('isVisible'), "pane.get('isVisible') === true") ;
  SC.RunLoop.begin();
  pane.appendChild(view) ;
  pane.append() ;
  view.set('isVisible', false);
  SC.RunLoop.end();
  ok(!view.get('isVisible'), "after pane.appendChild(view), view.get('isVisible') === true") ;
  ok(view.$().hasClass('hidden'), "after view.set('isVisible', false), view.$().hasClass('hidden') should be true") ;
});
