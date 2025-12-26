// sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// 倫撥圖
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    // 互動時重置自動播放計時器，避免快速連點導致不穩定
    stopAuto();
    showSlides(slideIndex += n);
    startAuto();
}
// Thumbnail image controls
function currentSlide(n) {
    stopAuto();
    showSlides(slideIndex = n);
    startAuto();
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// --- 新增：自動播放功能 ---
let autoTimer = null;
const AUTO_INTERVAL = 3000; // 自動播放間隔（毫秒），可調整
function startAuto() {
    stopAuto();
    autoTimer = setInterval(function () {
        // 使用已存在的 plusSlides 以維持行為一致
        plusSlides(1);
    }, AUTO_INTERVAL);
}
function stopAuto() {
    if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
    }
}

// --- 新增：可靠的啟動初始化（支援已就緒或等待 DOMContentLoaded） ---
function initOnReady() {
    // 啟動自動播放與滑鼠暫停行為
    try {
        startAuto();
        const container = document.querySelector('.slideshow-container');
        if (container) {
            container.addEventListener('mouseenter', stopAuto);
            container.addEventListener('mouseleave', startAuto);
        }
    } catch (e) {
        console.warn('幻燈片初始化錯誤', e);
    }
}

// 頁面載入時自動啟動輪播
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOnReady);
} else {
    initOnReady();
}

