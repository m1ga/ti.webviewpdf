const win = Ti.UI.createWindow();
const webviewpdf = require("ti.webviewpdf");

function saveData(data) {
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "test.pdf");
	if (file.exists()){
		file.deleteFile();
	}

	// write PDF
	file.write(data);

	setTimeout(function() {
		// open pdf viewer
		var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_VIEW,
			type: "application/pdf",
			data: file.nativePath
		});
		var open = Ti.Android.createIntentChooser(intent, "open pdf");
		Ti.Android.currentActivity.startActivity(open);
	}, 500)
}

const webview = Ti.UI.createWebView({
	url: "https://titaniumsdk.com"
});
const btn = Ti.UI.createButton({
	width: Ti.UI.FILL,
	title: "save pdf,one page",
	bottom: 5,
	left: 0,
	width: "48%"
});
const btn2 = Ti.UI.createButton({
	width: Ti.UI.FILL,
	title: "save pdf, menu",
	bottom: 5,
	right: 0,
	width: "48%"
});

btn.addEventListener("click", function() {
	webviewpdf.createPDF({
		webview: webview,
		pageWidth: 5000,
		pageHeight: 16000,
		firstPageOnly: true,
		success: function(e) {
			saveData(e.data);
		}
	})
});

btn2.addEventListener("click", function() {
	webviewpdf.createPDF({
		webview: webview,
		showMenu: true
	});
});

win.add([webview, btn, btn2]);
win.open();
