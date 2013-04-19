// Related inclusion of file from this file:
eclipse.runtime.include('nested-include.js');

var valueDefinedInIncludedInFolderJs = 789;

assertTrue(eclipse.resources.read('../README.txt').indexOf('Tests for eclipsescript') != -1);

eclipse.runtime.schedule(function(monitor) {
	java.lang.Thread.sleep(1000);
	//eclipse.runtime.include('nested-include.js');
});