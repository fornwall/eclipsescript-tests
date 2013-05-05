eclipse.runtime.include('asserts.js', 'included.js');

assertEquals(123, foo);
assertEquals(321, bar());
eclipse.runtime.include('folder/included-in-folder.js');
assertEquals(789, valueDefinedInIncludedInFolderJs);
assertEquals(567, valueDefinedInNestedIncludeJs);

eclipse.runtime.include('/' + eclipse.resources.currentProject.name + '/included-absolute.js');
assertEquals(includedAbsoluteValue, 'hello, world');
