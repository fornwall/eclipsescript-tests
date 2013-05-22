eclipse.runtime.include('asserts.js', 'included.js');

var container = {value:0};
var latch;

for (var i = 0; i < 100; i++) {
	eclipse.runtime.syncExec(function() { container.value++; });
	assertEquals(i+1, container.value);
}

container.value = 0;
latch = new java.util.concurrent.CountDownLatch(1);
eclipse.runtime.syncExec(function() { container.value++; latch.countDown(); });
latch.await();
assertEquals(1, container.value);

container.value = 0;
latch = new java.util.concurrent.CountDownLatch(1);
eclipse.runtime.schedule(function() { container.value++; latch.countDown(); });
latch.await();
assertEquals(1, container.value);

// A script normally gets called in the display thread:
assertEquals(org.eclipse.ui.PlatformUI.workbench.display.thread, java.lang.Thread.currentThread());

// ... but can be scheduled in a background job:
eclipse.runtime.schedule(function(monitor) {
	assertTrue(org.eclipse.ui.PlatformUI.workbench.display.thread != java.lang.Thread.currentThread());
	assertTrue(!monitor.canceled);
	monitor.setCanceled(true);
	assertTrue(monitor.canceled);
	java.lang.Class.forName('org.eclipse.core.runtime.IProgressMonitor').isInstance(monitor);
	// Then be run in the display thread:
	eclipse.runtime.syncExec(function() {
		assertTrue(org.eclipse.ui.PlatformUI.workbench.display.thread == java.lang.Thread.currentThread());
	});
	eclipse.runtime.asyncExec(function() {
		assertTrue(org.eclipse.ui.PlatformUI.workbench.display.thread == java.lang.Thread.currentThread());
	});
});
