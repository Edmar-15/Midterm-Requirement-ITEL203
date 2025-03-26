function showSection(sectionId) {
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function filterPets() {
    let searchValue = document.getElementById('searchBar').value.toLowerCase();
    let petCards = document.querySelectorAll('.pet-card');

    petCards.forEach(card => {
        let name = card.getAttribute('data-name').toLowerCase();
        let type = card.getAttribute('data-type').toLowerCase();

        if (name.includes(searchValue) || type.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
