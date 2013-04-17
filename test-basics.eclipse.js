eclipse.runtime.include('asserts.js');

assertEquals(1, 1);
assertEquals('asdf', 'asdf');
assertEquals('asdf', new java.lang.String('asdf'));

eclipse.editors.clipboard = 'Foo';
assertEquals('Foo', eclipse.editors.clipboard);
eclipse.editors.clipboard = 'Bar';
assertEquals('Bar', eclipse.editors.clipboard);

assertTrue(eclipse.resources.scriptProject.getFile('test-basics.eclipse.js').exists());
assertTrue(!eclipse.resources.scriptProject.getFile('no-such-file.txt').exists());

assertTrue(eclipse.resources.scriptProject instanceof Packages.org.eclipse.core.resources.IProject);
