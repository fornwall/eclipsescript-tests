function assertEquals(a, b) { if (a != b) eclipse.runtime.die('Failed assertion: "' + a + '" != "' + b + '"'); }
function assertTrue(a) { assertEquals(true, a); }
