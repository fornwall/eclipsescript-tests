var xmlString = '<doc lang="en"><list><element>hello</element><element>world</element></list></doc>';

var doc = eclipse.xml.parse(xmlString);
assertEquals('doc', doc.documentElement.tagName);
assertEquals('en', doc.documentElement.getAttribute('lang'));
assertEquals(2, doc.getElementsByTagName('element').length);
assertEquals('hello', doc.getElementsByTagName('element').item(0).textContent);
assertEquals('world', doc.getElementsByTagName('element').item(1).textContent);

doc = eclipse.xml.parse(new java.net.URL('http://eclipsescript.org/updates/site.xml'));
assertEquals('Update site for EclipseScript', doc.getElementsByTagName('description').item(0).textContent.trim());
