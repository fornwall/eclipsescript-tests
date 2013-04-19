assertTrue(eclipse.resources.read('http://example.com').indexOf('This domain is established to be used for illustrative examples in documents') != -1);

assertTrue(eclipse.resources.read('README.txt').indexOf('Tests for eclipsescript') != -1);

assertTrue(eclipse.resources.read('./README.txt') == eclipse.resources.read('./README.txt'))
assertTrue(eclipse.resources.read('.folder/../README.txt') == eclipse.resources.read('./README.txt'))
// Root is from script project:
assertTrue(eclipse.resources.read('/README.txt') == eclipse.resources.read('./README.txt'))
