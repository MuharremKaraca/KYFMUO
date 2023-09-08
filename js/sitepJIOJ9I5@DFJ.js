		//ÇAÐIRMA ÝÞLEMLERÝ
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
		//LÝNK ETKÝLEÞÝM JS
		links.forEach(link => {
			link.addEventListener('click', () => {
				const linkDataP = link.getAttribute('data-p');
				pagess.dataset.p = linkDataP;
				currentPage = parseInt(linkDataP); // Sayfa deðiþtiði için currentPage deðerini deðiþtirin
				pages.forEach(page => { // Tüm sayfalarýn görünümünü güncelleyin
					page.style.display = 'none'; // Önceki sayfada display block varsa none yapar
				});
				pages[currentPage - 1].style.display = 'block'; // Önceki sayfada display none varsa block yapar
			});
		});
		//NV-LÝNK ETKÝLEÞÝM JS
		nvLinks.forEach(link => {
			link.addEventListener('click', () => {
				const linkDataP = link.getAttribute('data-p');
				pagess.dataset.p = linkDataP;
				currentPage = parseInt(linkDataP); // Sayfa deðiþtiði için currentPage deðerini deðiþtirin
				pages.forEach(page => { // Tüm sayfalarýn görünümünü güncelleyin
					page.style.display = 'none'; // Önceki sayfada display block varsa none yapar
				});
				pages[currentPage - 1].style.display = 'block'; // Önceki sayfada display none varsa block yapar
			});
		});
		//KLAVYE EKRAN ETKÝLEÞÝMÝ JS
		document.addEventListener("keydown", (event) => {
			if (event.key === "ArrowDown") {
				nextPage();
			} else if (event.key === "ArrowUp") {
				prevPage();
			}
		});
		//MAUSE SCROLL EKRAN ETKÝLEÞÝMÝ JS
		document.addEventListener("wheel", (event) => {
			if (event.deltaY > 0) {
				nextPage();
			} else {
				prevPage();
			}
		});
		let startTouchY;
		let endTouchY;
		//DOKUNMATÝK EKRAN ETKÝLEÞÝMÝ JS
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