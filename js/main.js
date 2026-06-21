document.addEventListener('DOMContentLoaded', function() {
	var btnHatDownload1 = document.getElementById('ButtonHatDownload1');
	var btnHatDownload2 = document.getElementById('ButtonHatDownload2');
	var btnPluginDownload = document.getElementById('ButtonPluginDownload');

	function changeDownloadUrl(button, newUrl) {
        if (button) {
            button.href = newUrl;
            console.log('changeDownloadUrl:', button);
        }
    }

    changeDownloadUrl(btnHatDownload1, 'https://github.com/SomovStudio/Hat/releases/download/v1.5.3/Hat-1.5.3.zip');
    changeDownloadUrl(btnHatDownload2, 'https://github.com/SomovStudio/Hat/releases/download/v1.5.3/Hat-1.5.3.zip');
    changeDownloadUrl(btnPluginDownload, 'https://github.com/SomovStudio/HatPluginMySql/releases/download/1.0.15.0/HatPluginMySql-1.0.15.0.zip');

    function updateHatVersion(version, date) {
        const versionElement = document.getElementById('HatVersion');
        const dateElement = document.getElementById('HatVersionDate');
        if (versionElement) versionElement.textContent = version;
        if (dateElement) dateElement.textContent = date;
    }

    updateHatVersion('v1.5.3', '06/21/2026');

    function buttonMenu()
    {
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
    }

    buttonMenu();
});