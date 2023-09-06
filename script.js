function addEvent(day) {
    const eventInput = document.getElementById(`${day}-event`);
    const eventText = eventInput.value.trim();

    if (eventText !== '') {
        const event = document.createElement('div');
        event.className = 'event';
        event.textContent = eventText;

        const dayEvents = document.getElementById(`${day}-events`);
        dayEvents.appendChild(event);

        eventInput.value = '';
    }
}

function addEvent(day) {
    const eventInput = document.getElementById(`${day}-event`);
    const eventText = eventInput.value.trim();

    if (eventText !== '') {
        const event = document.createElement('div');
        event.className = 'event';
        event.textContent = eventText;

        const dayEvents = document.getElementById(`${day}-events`);
        dayEvents.appendChild(event);

        eventInput.value = '';

        saveEvent(day, eventText);
    }
}

function saveEvent(day, eventText) {
    const existingEvents = JSON.parse(localStorage.getItem(`${day}-events`)) || [];
    existingEvents.push(eventText);
    localStorage.setItem(`${day}-events`, JSON.stringify(existingEvents));
}

function loadEvents(day) {
    const dayEvents = document.getElementById(`${day}-events`);
    const storedEvents = JSON.parse(localStorage.getItem(`${day}-events`)) || [];

    for (const eventText of storedEvents) {
        const event = document.createElement('div');
        event.className = 'event';
        event.textContent = eventText;
        dayEvents.appendChild(event);
    }
}

loadEvents('monday');
loadEvents('tuesday');
loadEvents('wednesday');
loadEvents('thursday');
loadEvents('friday');
loadEvents('saturday');
loadEvents('sunday');

function resetTimetable() {
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    for (const day of daysOfWeek) {
        const dayEvents = document.getElementById(`${day}-events`);
        dayEvents.innerHTML = ''; 

        localStorage.removeItem(`${day}-events`); 
    }
}

