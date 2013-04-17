eclipse.resources.scriptProject.members().forEach(function(member) {
	if (member.name.indexOf('test-') === 0) {
		eclipse.console.print('Running test: ' + member.name + '...');
		eval(eclipse.resources.read(member));
		eclipse.console.println(' Done!');
	}
});
