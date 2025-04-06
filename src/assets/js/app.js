// Получаем все карточки
const cardAll = document.querySelectorAll(".cases__list-link");

// Функция для запуска видео
function playVideo(video) {
	video.currentTime = 0; // Сбрасываем время воспроизведения
	video.play(); // Запускаем видео
}

// Функция для остановки видео
function pauseVideo(video) {
	video.pause(); // Останавливаем видео
}

// Добавляем обработчики событий для каждой карточки
cardAll.forEach((card) => {
	const video = card.querySelector(".video-back"); // Находим видео внутри текущей карточки
	console.log(video);
	if (video) {
		// При наведении на карточку
		card.addEventListener("mouseenter", () => {
			playVideo(video); // Запускаем связанное видео
		});

		// При уходе курсора с карточки
		card.addEventListener("mouseleave", () => {
			pauseVideo(video); // Останавливаем связанное видео
		});
	}
});
