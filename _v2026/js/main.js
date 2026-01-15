document.addEventListener('DOMContentLoaded', function() {
	var btnHatDownloadEng1 = document.getElementById('ButtonHatDownloadEng1');
	var btnHatDownloadEng2 = document.getElementById('ButtonHatDownloadEng2');
	var btnPluginDownloadEng = document.getElementById('ButtonPluginDownloadEng');

	function changeDownloadUrl(button, newUrl) {
        if (button) {
            button.href = newUrl;
            console.log('changeDownloadUrl:', button);
        }
    }

    changeDownloadUrl(btnHatDownloadEng1, 'https://github.com/SomovStudio/Hat/releases/download/v1.4.17/Hat-1.4.17.zip');
    changeDownloadUrl(btnHatDownloadEng2, 'https://github.com/SomovStudio/Hat/releases/download/v1.4.17/Hat-1.4.17.zip');
    changeDownloadUrl(btnPluginDownloadEng, 'https://github.com/SomovStudio/HatPluginMySql/releases/download/1.0.14.17/HatPluginMySql-1.0.14.17.zip');
});