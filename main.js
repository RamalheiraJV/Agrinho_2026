
        const btn = document.getElementById('accessibilityBtn');
        const menu = document.getElementById('accessibilityMenu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        let fontSize = 100;

        function changeFontSize(value) {
            fontSize += value * 10;
            fontSize = Math.max(70, Math.min(fontSize, 200));
            document.body.style.fontSize = fontSize + '%';
        }

        function toggleContrast() {
            document.body.classList.toggle('high-contrast');
        }
