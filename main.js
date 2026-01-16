document.addEventListener('DOMContentLoaded', () => {
    const clock = document.getElementById('clock-widget');
    const calendar = document.getElementById('calendar-widget');
    const button = document.getElementById('toggle-btn');

    clock.classList.add('hidden');
    calendar.classList.remove('hidden');
    button.textContent = 'Show Calendar';
    let showingClock = false;

    button.addEventListener('click', () => {
        showingClock = !showingClock;

        if (showingClock) {
            clock.classList.remove('hidden');
            calendar.classList.add('hidden');
            button.textContent = 'Show Calendar';
        } else {
            clock.classList.add('hidden');
            calendar.classList.remove('hidden');
            button.textContent = 'Show Clock';
        }
    });
});