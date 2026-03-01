// 테마 관리
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// 초기 테마 설정
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

// 테마 토글 이벤트
themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// 사이드바 메뉴 토글 기능
function setupToggle(buttonId, menuId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    if (!button || !menu) return;

    button.addEventListener('click', () => {
        const icon = button.querySelector('svg:last-child path');
        menu.classList.toggle('hidden');
        
        if (menu.classList.contains('hidden')) {
            icon.setAttribute('d', 'M9 5l7 7-7 7');
        } else {
            icon.setAttribute('d', 'M19 9l-7 7-7-7');
        }
    });
}

// 메뉴 토글 초기화
setupToggle('staffToggle', 'staffMenu');
setupToggle('gxToggle', 'gxMenu');