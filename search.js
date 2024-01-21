const searchInput = document.getElementById('searchInput');
        const games = document.getElementById('games').getElementsByClassName('game');

        searchInput.addEventListener('input', function () {
            const searchTerm = searchInput.value.toLowerCase();
            for (let i = 0; i < games.length; i++) {
                const gameTitle = games[i].getElementsByClassName('gameTitle')[0].innerText.toLowerCase();
                if (gameTitle.includes(searchTerm)) {
                    games[i].style.display = 'block';
                } else {
                    games[i].style.display = 'none';
                }
            }
        });