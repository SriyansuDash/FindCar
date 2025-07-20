 const hamburger = document.getElementById("hamburger");
        const menu = document.getElementById("menu");

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        //Adding DarkMode
        let darkmode = localStorage.getItem("darkmode");
        const themeChange = document.getElementById("themeChange");

        themeChange.addEventListener("click", () => {
            if (darkmode === "enabled") {
                document.body.classList.remove("darkmode");
                darkmode = "disabled";
                localStorage.setItem("darkmode", "disabled");
            }
            else {
                document.body.classList.add("darkmode");
                darkmode = "enabled";
                localStorage.setItem("darkmode", "enabled");
            }
        });

        const thumbnails = document.querySelectorAll(".first-image img");
        const previewImage = document.querySelector(".preview-car img");

        thumbnails.forEach(thumb => {
            thumb.addEventListener("click", () => {
                document.querySelector(".active-thumb")?.classList.remove("active-thumb");
                thumb.classList.add("active-thumb");
                previewImage.src = thumb.src;
            });
        });
        document.getElementById('thumb-bmw').classList.add('active-thumb');
        //Adding search
        const searchInput = document.getElementById('search');
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                    window.location.href = googleSearchUrl;
                }
            }
        });