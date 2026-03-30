const profiles = {
    1: { letter: 'L', class: 'mini-avatar-1' },
    2: { letter: 'A', class: 'mini-avatar-2' },
    3: { letter: 'C', class: 'mini-avatar-3' },
    4: { letter: 'K', class: 'mini-avatar-4' },
};

function selectProfile(name, id) {
    const overlay = document.getElementById('transitionOverlay');
    overlay.classList.add('active');

    setTimeout(() => {
        document.getElementById('profilePage').style.display = 'none';
        document.getElementById('browsePage').classList.add('active');

        const mini = document.getElementById('miniAvatar');
        const p = profiles[id];
        mini.className = 'mini-avatar ' + p.class;
        mini.textContent = p.letter;
        document.getElementById('miniName').textContent = name;

        setTimeout(() => {
            overlay.classList.remove('active');
        }, 400);
    }, 600);
}

function goBack() {
    const overlay = document.getElementById('transitionOverlay');
    overlay.classList.add('active');

    setTimeout(() => {
        document.getElementById('browsePage').classList.remove('active');
        document.getElementById('profilePage').style.display = 'block';

        setTimeout(() => {
            overlay.classList.remove('active');
        }, 400);
    }, 600);
}
