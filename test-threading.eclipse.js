// A script normally gets called in the display thread:
assertEquals(org.eclipse.ui.PlatformUI.workbench.display.thread, java.lang.Thread.currentThread());

// .. but can be run in a background job:
eclipse.runtime.schedule(function(monitor) {
	assertTrue(org.eclipse.ui.PlatformUI.workbench.display.thread != java.lang.Thread.currentThread());
	assertTrue(!monitor.canceled);
	monitor.setCanceled(true);
	assertTrue(monitor.canceled);
	java.lang.Class.forName('org.eclipse.core.runtime.IProgressMonitor').isInstance(monitor);
});
