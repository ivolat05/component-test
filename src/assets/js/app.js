const cardAll = document.querySelectorAll(".cases__list-link");
function playVideo(video) {
	video.currentTime = 0;
	video.play();
}

function pauseVideo(video) {
	video.pause();
}

cardAll.forEach((card) => {
	const video = card.querySelector(".video-back");
	console.log(video);
	if (video) {
		card.addEventListener("mouseenter", () => {
			playVideo(video);
		});

		card.addEventListener("mouseleave", () => {
			pauseVideo(video);
		});
	}
});
