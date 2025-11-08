$(function() {
    // Данные новостей (в реальном проекте будут приходить с сервера)
    const newsData = [
        { id: 1, title: "Заголовок новости 1", date: "15 декабря 2024", excerpt: "Краткое описание новости 1 с интересными деталями...", image: "./img/news01.jpg" },
        { id: 2, title: "Заголовок новости 2", date: "14 декабря 2024", excerpt: "Краткое описание новости 2 с интересными деталями...", image: "./img/news02.jpg" },
        { id: 3, title: "Заголовок новости 3", date: "13 декабря 2024", excerpt: "Краткое описание новости 3 с интересными деталями...", image: "./img/news03.jpg" },
        { id: 4, title: "Заголовок новости 4", date: "12 декабря 2024", excerpt: "Краткое описание новости 4 с интересными деталями...", image: "./img/news04.jpg" },
        { id: 5, title: "Заголовок новости 5", date: "11 декабря 2024", excerpt: "Краткое описание новости 5 с интересными деталями...", image: "./img/news05.jpg" },
        { id: 6, title: "Заголовок новости 6", date: "10 декабря 2024", excerpt: "Краткое описание новости 6 с интересными деталями...", image: "./img/news06.jpg" },
        { id: 7, title: "Заголовок новости 7", date: "9 декабря 2024", excerpt: "Краткое описание новости 7 с интересными деталями...", image: "./img/news07.jpg" },
        { id: 8, title: "Заголовок новости 8", date: "8 декабря 2024", excerpt: "Краткое описание новости 8 с интересными деталями...", image: "./img/news08.jpg" },
        { id: 9, title: "Заголовок новости 9", date: "7 декабря 2024", excerpt: "Краткое описание новости 9 с интересными деталями...", image: "./img/news09.jpg" },
        { id: 10, title: "Заголовок новости 10", date: "6 декабря 2024", excerpt: "Краткое описание новости 10 с интересными деталями...", image: "./img/news10.jpg" },
        { id: 11, title: "Заголовок новости 11", date: "5 декабря 2024", excerpt: "Краткое описание новости 11 с интересными деталями...", image: "./img/news11.jpg" },
        { id: 12, title: "Заголовок новости 12", date: "4 декабря 2024", excerpt: "Краткое описание новости 12 с интересными деталями...", image: "./img/news12.jpg" }
    ];

    const itemsPerPage = 6;
    let currentPage = 1;

    function changePage(page) {
        const totalPages = Math.ceil(newsData.length / itemsPerPage);
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
            displayNews();
            updatePagination();
        }
    }

    function displayNews() {
        const $newsGrid = $('#newsGrid');
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentNews = newsData.slice(startIndex, endIndex);

        const newsHTML = currentNews.map(news => `
            <div class="news-item">
                <img src="${news.image}" alt="${news.title}" class="news-item-image">
                <div class="news-item-content">
                    <div class="news-item-date">${news.date}</div>
                    <h3 class="news-item-title">${news.title}</h3>
                    <p class="news-item-excerpt">${news.excerpt}</p>
                </div>
            </div>
        `).join('');

        $newsGrid.html(newsHTML);
    }

    function updatePagination() {
        const totalPages = Math.ceil(newsData.length / itemsPerPage);
        const $pageNumbers = $('#newsPaginationPageNumbers');
        const $prevBtn = $('.news-pagination-prev-btn');
        const $nextBtn = $('.news-pagination-next-btn');

        $prevBtn.prop('disabled', currentPage === 1);
        $nextBtn.prop('disabled', currentPage === totalPages);

        let pagesHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const activeClass = i === currentPage ? 'active' : '';
            pagesHTML += `
                <button class="news-pagination-page-btn ${activeClass}" data-page="${i}">
                    ${i}
                </button>
            `;
        }
        $pageNumbers.html(pagesHTML);
    }

    // Обработчики событий для всех кнопок пагинации
    $(document).on('click', '.news-pagination-page-btn', function() {
        const page = parseInt($(this).data('page'));
        changePage(page);
    });

    $(document).on('click', '.news-pagination-prev-btn', function() {
        if (!$(this).prop('disabled')) {
            changePage(currentPage - 1);
        }
    });

    $(document).on('click', '.news-pagination-next-btn', function() {
        if (!$(this).prop('disabled')) {
            changePage(currentPage + 1);
        }
    });

    // Инициализация
    displayNews();
    updatePagination();
});