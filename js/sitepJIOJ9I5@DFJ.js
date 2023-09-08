		//�A�IRMA ��LEMLER�
		const main = document.querySelector("main");
		const pages = document.querySelectorAll(".page");
		const images = document.querySelectorAll(".img");
		const pagess = document.getElementById("base-pages");
		let currentPage = 1;

		const links = document.querySelectorAll('.link');
		const nvLinks = document.querySelectorAll('.nv-link');
		//NEXTPAGE JS
		function nextPage() {
			if (currentPage < pages.length) {
				pages[currentPage - 1].style.display = "none";
				pages[currentPage].style.display = "block";
				currentPage++;
				pagess.setAttribute("data-p", currentPage);


			}
		}
		//PREVPAGE JS
		function prevPage() {
			if (currentPage > 1) {
				pages[currentPage - 1].style.display = "none";
				pages[currentPage - 2].style.display = "block";
				currentPage--;
				pagess.setAttribute("data-p", currentPage);
					}
		}
		//L�NK ETK�LE��M JS
		links.forEach(link => {
			link.addEventListener('click', () => {
				const linkDataP = link.getAttribute('data-p');
				pagess.dataset.p = linkDataP;
				currentPage = parseInt(linkDataP); // Sayfa de�i�ti�i i�in currentPage de�erini de�i�tirin
				pages.forEach(page => { // T�m sayfalar�n g�r�n�m�n� g�ncelleyin
					page.style.display = 'none'; // �nceki sayfada display block varsa none yapar
				});
				pages[currentPage - 1].style.display = 'block'; // �nceki sayfada display none varsa block yapar
			});
		});
		//NV-L�NK ETK�LE��M JS
		nvLinks.forEach(link => {
			link.addEventListener('click', () => {
				const linkDataP = link.getAttribute('data-p');
				pagess.dataset.p = linkDataP;
				currentPage = parseInt(linkDataP); // Sayfa de�i�ti�i i�in currentPage de�erini de�i�tirin
				pages.forEach(page => { // T�m sayfalar�n g�r�n�m�n� g�ncelleyin
					page.style.display = 'none'; // �nceki sayfada display block varsa none yapar
				});
				pages[currentPage - 1].style.display = 'block'; // �nceki sayfada display none varsa block yapar
			});
		});
		//KLAVYE EKRAN ETK�LE��M� JS
		document.addEventListener("keydown", (event) => {
			if (event.key === "ArrowDown") {
				nextPage();
			} else if (event.key === "ArrowUp") {
				prevPage();
			}
		});
		//MAUSE SCROLL EKRAN ETK�LE��M� JS
		document.addEventListener("wheel", (event) => {
			if (event.deltaY > 0) {
				nextPage();
			} else {
				prevPage();
			}
		});
		let startTouchY;
		let endTouchY;
		//DOKUNMAT�K EKRAN ETK�LE��M� JS
		document.addEventListener('touchstart', (event) => {
			startTouchY = event.touches[0].clientY;
		});

		document.addEventListener('touchmove', (event) => {
			event.preventDefault();
			endTouchY = event.touches[0].clientY;
		});

		document.addEventListener('touchend', () => {
			if (startTouchY > endTouchY) {
				nextPage();
			} else if (startTouchY < endTouchY) {
				prevPage();
			}
		});