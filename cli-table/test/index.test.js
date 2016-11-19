
/**
 * Module requirements.
 */

var test = require('tape');

var Table = require('../');

/**
 * Tests.
 */


test('test complete table', function (t){
  t.plan(1)
  var table = new Table({
      head: ['Rel', 'Change', 'By', 'When']
    , style: {
          'padding-left': 1
        , 'padding-right': 1
        , head: []
        , border: []
      }
    , colWidths: [6, 21, 25, 17]
  });

  table.push(
      ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago']
    , ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago']
  );

  var expected = [
      '┌──────┬─────────────────────┬─────────────────────────┬─────────────────┐'
    , '│ Rel  │ Change              │ By                      │ When            │'
    , '├──────┼─────────────────────┼─────────────────────────┼─────────────────┤'
    , '│ v0.1 │ Testing something … │ rauchg@gmail.com        │ 7 minutes ago   │'
    , '├──────┼─────────────────────┼─────────────────────────┼─────────────────┤'
    , '│ v0.1 │ Testing something … │ rauchg@gmail.com        │ 8 minutes ago   │'
    , '└──────┴─────────────────────┴─────────────────────────┴─────────────────┘'
  ];

  t.equal(table.toString(),expected.join("\n"));
})

test('test width property', function (t){
  t.plan(1)
  var table = new Table({
      head: ['Cool'],
      style: {
        head: [],
        border: []
      }
  });

  t.equal(table.width,8);
})

test('test vertical table output', function(t) {
  t.plan(1)
  var table = new Table({ style: {'padding-left':0, 'padding-right':0, head:[], border:[]} }); // clear styles to prevent color output

  table.push(
      {'v0.1': 'Testing something cool'}
    , {'v0.1': 'Testing something cool'}
  );

  var expected = [
      '┌────┬──────────────────────┐'
    , '│v0.1│Testing something cool│'
    , '├────┼──────────────────────┤'
    , '│v0.1│Testing something cool│'
    , '└────┴──────────────────────┘'
  ];

  t.equal(table.toString(),expected.join("\n"));
})

test('test cross table output', function(t) {
  t.plan(1)
  var table = new Table({ head: ["", "Header 1", "Header 2"], style: {'padding-left':0, 'padding-right':0, head:[], border:[]} }); // clear styles to prevent color output

  table.push(
      {"Header 3": ['v0.1', 'Testing something cool'] }
    , {"Header 4": ['v0.1', 'Testing something cool'] }
  );

  var expected = [
      '┌────────┬────────┬──────────────────────┐'
    , '│        │Header 1│Header 2              │'
    , '├────────┼────────┼──────────────────────┤'
    , '│Header 3│v0.1    │Testing something cool│'
    , '├────────┼────────┼──────────────────────┤'
    , '│Header 4│v0.1    │Testing something cool│'
    , '└────────┴────────┴──────────────────────┘'
  ];

  t.equal(table.toString(),expected.join("\n"));
})

test('test custom chars', function (t){
  t.plan(1)
  var table = new Table({
    chars: {
        'top': '═'
      , 'top-mid': '╤'
      , 'top-left': '╔'
      , 'top-right': '╗'
      , 'bottom': '═'
      , 'bottom-mid': '╧'
      , 'bottom-left': '╚'
      , 'bottom-right': '╝'
      , 'left': '║'
      , 'left-mid': '╟'
      , 'right': '║'
      , 'right-mid': '╢'
    },
    style: {
        head: []
      , border: []
    }
  });

  table.push(
      ['foo', 'bar', 'baz']
    , ['frob', 'bar', 'quuz']
  );

  var expected = [
      '╔══════╤═════╤══════╗'
    , '║ foo  │ bar │ baz  ║'
    , '╟──────┼─────┼──────╢'
    , '║ frob │ bar │ quuz ║'
    , '╚══════╧═════╧══════╝'
  ];

  t.equal(table.toString(),expected.join("\n"));
})

test('test compact shortand', function (t){
  t.plan(1)
  var table = new Table({
    style: {
        head: []
      , border: []
      , compact : true
    }
  });

  table.push(
      ['foo', 'bar', 'baz']
    , ['frob', 'bar', 'quuz']
  );

  var expected = [
      '┌──────┬─────┬──────┐'
    , '│ foo  │ bar │ baz  │'
    , '│ frob │ bar │ quuz │'
    , '└──────┴─────┴──────┘'
  ];

  t.equal(table.toString(),expected.join("\n"));
})

test('test compact empty mid line', function (t){
  t.plan(1)
  var table = new Table({
    chars: {
        'mid': ''
      , 'left-mid': ''
      , 'mid-mid': ''
      , 'right-mid': ''
    },
    style: {
        head: []
      , border: []
    }
  });

  table.push(
      ['foo', 'bar', 'baz']
    , ['frob', 'bar', 'quuz']
  );

  var expected = [
      '┌──────┬─────┬──────┐'
    , '│ foo  │ bar │ baz  │'
    , '│ frob │ bar │ quuz │'
    , '└──────┴─────┴──────┘'
  ];

  t.equal(table.toString(),expected.join("\n"));
})

test('test decoration lines disabled', function (t){
  t.plan(1)
  var table = new Table({
    chars: {
        'top': ''
      , 'top-mid': ''
      , 'top-left': ''
      , 'top-right': ''
      , 'bottom': ''
      , 'bottom-mid': ''
      , 'bottom-left': ''
      , 'bottom-right': ''
      , 'left': ''
      , 'left-mid': ''
      , 'mid': ''
      , 'mid-mid': ''
      , 'right': ''
      , 'right-mid': ''
      , 'middle': ' ' // a single space
    },
    style: {
        head: []
      , border: []
      , 'padding-left': 0
      , 'padding-right': 0
    }
  });

  table.push(
      ['foo', 'bar', 'baz']
    , ['frobnicate', 'bar', 'quuz']
  );

  var expected = [
      'foo        bar baz '
    , 'frobnicate bar quuz'
  ];

  t.equal(table.toString(),expected.join("\n"));
})

test('test with null/undefined as values or column names', function (t){
  t.plan(1)
  var table = new Table({
    style: {
        head: []
      , border: []
    }
  });

  table.push(
      [null, undefined, 0]
  );

  var expected = [
      '┌──┬──┬───┐'
    , '│  │  │ 0 │'
    , '└──┴──┴───┘'
  ];

  t.equal(table.toString(),expected.join("\n"));
})
