document.addEventListener('DOMContentLoaded', () => {
    function buildCalendar() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();

        const monthNames = [
            'January','February','March','April','May','June',
            'July','August','September','October','November','December'
        ];
        const monthText = monthNames[month]
        const monthContainer = document.getElementById('calendar-month');
        monthContainer.innerHTML = monthText + ' ' + year;
        
        const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

       
        const weekdaysContainer = document.getElementById('calendar-weekdays');
        weekdaysContainer.innerHTML = '';
        weekdays.forEach(day => {
            const cell = document.createElement('div');
            cell.textContent = day;
            weekdaysContainer.appendChild(cell);
        });

        //build calendar grid
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month+1, 0).getDate();

        const grid = document.getElementById('calendar-grid');
        grid.innerHTML = '';

        //Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            grid.appendChild(emptyCell);
        }

        //fill days
        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement('div');
            cell.textContent = day;

            //Highlight today
            if (day === now.getDate()) {
                cell.classList.add('today');
            }

            grid.appendChild(cell);
        }
        
    }

    buildCalendar();
});

