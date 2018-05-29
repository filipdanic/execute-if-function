const test = require('tape');
const executeIfFunction = require('./readme');

test('it calls function and returns result', (t) => {
  t.plan(1);
  const fn = () => 10;
  t.equal(executeIfFunction(fn), fn());
  t.end();
});

test('it returns non-functions', (t) => {
  t.plan(1);
  const test = 'foobar';
  t.equal(executeIfFunction(test), test);
  t.end();
});
