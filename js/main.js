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

    changeDownloadUrl(btnHatDownload1, 'https://github.com/SomovStudio/Hat/releases/download/v1.4.18/Hat-1.4.18.zip');
    changeDownloadUrl(btnHatDownload2, 'https://github.com/SomovStudio/Hat/releases/download/v1.4.18/Hat-1.4.18.zip');
    changeDownloadUrl(btnPluginDownload, 'https://github.com/SomovStudio/HatPluginMySql/releases/download/1.0.14.18/HatPluginMySql-1.0.14.18.zip');

    function updateHatVersion(version, date) {
        const versionElement = document.getElementById('HatVersion');
        const dateElement = document.getElementById('HatVersionDate');
        if (versionElement) versionElement.textContent = version;
        if (dateElement) dateElement.textContent = date;
    }

    updateHatVersion('v1.4.18', '02/02/2026');

    function buttonMenu()
    {
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
    }

    buttonMenu();
});