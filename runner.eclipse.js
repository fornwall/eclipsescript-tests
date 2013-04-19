eclipse.resources.scriptProject.members().forEach(function(member) {
	if (member.name.indexOf('test-') === 0) {
		eclipse.console.print('Running test: ' + member.name + '...');
		eclipse.runtime.include(member);
		eclipse.console.println(' Done!');
	}
});
