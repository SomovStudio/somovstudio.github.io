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

    changeDownloadUrl(btnHatDownload1, 'https://gitflic.ru/project/somovstudio/hat/release/c56f752f-d2e5-499a-b75d-9ce755c9b4db/1ce9e85d-64d0-43d1-8ba9-5833f948358a/download');
    changeDownloadUrl(btnHatDownload2, 'https://gitflic.ru/project/somovstudio/hat/release/c56f752f-d2e5-499a-b75d-9ce755c9b4db/1ce9e85d-64d0-43d1-8ba9-5833f948358a/download');
    changeDownloadUrl(btnPluginDownload, 'https://gitflic.ru/project/somovstudio/hatpluginmysql/release/86344a37-20b7-4341-8f9c-8611678d2a5a/e9df0e0a-859f-4f29-bbb8-e8667cb11b33/download');

    function updateHatVersion(version, date) {
        const versionElement = document.getElementById('HatVersion');
        const dateElement = document.getElementById('HatVersionDate');
        if (versionElement) versionElement.textContent = version;
        if (dateElement) dateElement.textContent = date;
    }

    updateHatVersion('v1.4.17', '09.12.2025');

    function buttonMenu()
    {
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
    }

    buttonMenu();
});