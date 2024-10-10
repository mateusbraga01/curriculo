document.getElementById('toggle-info').addEventListener('click', function() {
    const moreInfo = document.getElementById('more-info');
    const button = document.getElementById('toggle-info');

    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        button.textContent = 'Mostrar menos';
    } else {
        moreInfo.style.display = 'none';
        button.textContent = 'Mostrar mais';
    }
});

function toggleSection(sectionID, buttonID) {
    const sectionContent = document.getElementById(sectionID);
    const button = document.getElementById(buttonID);

    if (sectionContent.style.display === 'none' || sectionContent.style.display === '') {
        sectionContent.style.display = 'block';
        button.textContent = 'Mostrar menos';
    } else {
        sectionContent.style.display = 'none';
        button.textContent = 'Mostrar mais';
    }
}

document.getElementById('toggle-knowledge').addEventListener('click', function() {
    toggleSection('knowledge-content');
});

document.getElementById('toggle-skills').addEventListener('click', function() {
    toggleSection('skills-content');
});

document.getElementById('toggle-objectives').addEventListener('click', function() {
    toggleSection('objectives-content');
});

document.addEventListener('DOMContentLoaded', function() {
    const moreInfo = document.getElementById('more-info');
    moreInfo.style.display = 'none';
    document.getElementById('knowledge-content').style.display = 'none';
    document.getElementById('skills-content').style.display = 'none';
    document.getElementById('objectives-content').style.display = 'none';
});
