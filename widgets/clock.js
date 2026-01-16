document.addEventListener('DOMContentLoaded', () => {
    function padZero(n) {
        return n.toString().padStart(2, '0');
    }

    function updateFlips() {
        const now = new Date();
        const hours24 = padZero(now.getHours());
        const minutes = padZero(now.getMinutes());
        let hours = padZero(hours24 % 12 || 12); 

        const ampm = hours24 >=12 ? 'PM' : 'AM';

        const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        const day = days[now.getDay()];

        //Render each flip
        document.getElementById('hour-card').textContent = hours;
        document.getElementById('minute-card').textContent = minutes;
        document.getElementById('ampm').textContent = ampm;
        document.getElementById('day').textContent = day;
    }

    // Initialize and update every minute
    updateFlips();
    setInterval(updateFlips, 60000);
});

    