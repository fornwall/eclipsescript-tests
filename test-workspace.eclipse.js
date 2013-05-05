// Note that this test depends on having a file of this project opened in an editor.
assertTrue(eclipse.resources.currentProject != null);

var foundScriptProject = false;
var members = eclipse.resources.workspace.root.members();
for (var i = 0; i < members.length; i++) {
	if (members[i] == eclipse.resources.scriptProject) {
		foundScriptProject = true;
	}
}
assertTrue(foundScriptProject);
