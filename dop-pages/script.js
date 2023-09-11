document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    const percentageElement = document.querySelector(".percentage");

    // Имитируем загрузку контента (здесь можно подставить реальную логику загрузки)
    let loaded = 0;
    let total = 100; // Здесь задаем общее количество загружаемых данных (100%)

    function updatePercentage() {
        const percentComplete = (loaded / total) * 100;
        percentageElement.textContent = percentComplete.toFixed(0) + "%";

        if (loaded === total) {
            // Загрузка завершена
            preloader.style.display = "none"; // Скрываем прелоадер
            content.style.display = "block"; // Отображаем основное содержимое
        }
    }

    // Имитация загрузки (в реальности замените этот блок на реальную загрузку)
    function simulateLoading() {
        setTimeout(() => {
            loaded += 10; // Имитация загрузки 10% данных
            updatePercentage();

            if (loaded < total) {
                // Если не все данные загружены, продолжаем имитацию
                simulateLoading();
            }
        }, 200); // Задержка в миллисекундах (здесь 0.5 секунды)
    }

    simulateLoading(); // Начинаем имитацию загрузки
});

