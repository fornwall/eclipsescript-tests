eclipse.runtime.include('asserts.js');

// https://github.com/mozilla/rhino/commit/b96c299c9a824fe4a8aa703b7bc366f32465da0f
var x = new JavaAdapter(java.util.HashMap, {});
assertTrue(x instanceof java.util.HashMap);
assertTrue(x instanceof java.util.Map);
x.put("foo", "bar");
assertEquals('bar', x.get("foo"));
x = new JavaAdapter(java.util.HashMap, {}, {a: "b"})
assertEquals("b", x.get("a"));
x = new JavaAdapter(java.util.HashMap, {get: function(key) {return 2 + this.super$get(key)}})
x.put("foo", "bar")
assertEquals('2bar', x.get("foo"))
