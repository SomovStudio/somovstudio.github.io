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

    changeDownloadUrl(btnHatDownload1, 'https://gitflic.ru/project/somovstudio/hat/release/4095834d-7284-4b1f-b6e8-b90f18ecb57c/2025937d-4f23-4296-84e4-d9c201257218/download');
    changeDownloadUrl(btnHatDownload2, 'https://gitflic.ru/project/somovstudio/hat/release/4095834d-7284-4b1f-b6e8-b90f18ecb57c/2025937d-4f23-4296-84e4-d9c201257218/download');
    changeDownloadUrl(btnPluginDownload, 'https://gitflic.ru/project/somovstudio/hatpluginmysql/release/acf4d342-b595-4bce-8e5f-c7c7eca655ec/48404465-5308-40b5-95e5-238cb530c220/download');

    function updateHatVersion(version, date) {
        const versionElement = document.getElementById('HatVersion');
        const dateElement = document.getElementById('HatVersionDate');
        if (versionElement) versionElement.textContent = version;
        if (dateElement) dateElement.textContent = date;
    }

    updateHatVersion('v1.5.1', '15.04.2026');

    function buttonMenu()
    {
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
    }

    buttonMenu();
});