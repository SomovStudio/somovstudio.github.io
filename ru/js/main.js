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

    changeDownloadUrl(btnHatDownload1, 'https://gitflic.ru/project/somovstudio/hat/release/610b7ecd-7361-461b-b49a-001eef36c57b/c55a269b-7326-43d7-9df3-b5fbde06343f/download');
    changeDownloadUrl(btnHatDownload2, 'https://gitflic.ru/project/somovstudio/hat/release/610b7ecd-7361-461b-b49a-001eef36c57b/c55a269b-7326-43d7-9df3-b5fbde06343f/download');
    changeDownloadUrl(btnPluginDownload, 'https://gitflic.ru/project/somovstudio/hatpluginmysql/release/46c132d5-ac78-4a9f-a26a-f2e9af375dce/6207df58-be74-40a2-9f65-05e09aff1dae/download');

    function updateHatVersion(version, date) {
        const versionElement = document.getElementById('HatVersion');
        const dateElement = document.getElementById('HatVersionDate');
        if (versionElement) versionElement.textContent = version;
        if (dateElement) dateElement.textContent = date;
    }

    updateHatVersion('v1.4.19', '25.02.2026');

    function buttonMenu()
    {
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
    }

    buttonMenu();
});