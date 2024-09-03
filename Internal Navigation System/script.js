// Get DOM elements
const searchInput = document.getElementById('search');
const roomInfo = document.getElementById('room-info');
const mapAreas = document.querySelectorAll('area');

// Add event listeners to map areas
mapAreas.forEach(area => {
    area.addEventListener('click', (e) => {
        e.preventDefault();
        displayRoomInfo(area.getAttribute('data-info'));
    });
});

// Display information about the selected room or area
function displayRoomInfo(info) {
    roomInfo.innerText = info;
}

// Search functionality
searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    let found = false;

    mapAreas.forEach(area => {
        if (area.getAttribute('alt').toLowerCase().includes(searchValue)) {
            displayRoomInfo(area.getAttribute('data-info'));
            found = true;
        }
    });

    if (!found) {
        roomInfo.innerText = 'No matching room found. Please try a different search.';
    }
});
