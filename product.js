// 產品介紹頁面

// 執行函數並顯示所有列
filterSelection("all")
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
// 為已篩選的元素添加 show，未選中的元素移除 show
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// 顯示過濾的元素
function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// 隱藏未選擇的元素
function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// 將活動類添加到當前按鈕（突出顯示它）
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
};


//

// 產品小卡彈出視窗功能
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.modal-close');
    const productCardBtns = document.querySelectorAll('.product-card-btn');

    // 打開彈窗
    productCardBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            const productName = this.getAttribute('data-name');
            const productImg = this.getAttribute('data-img');
            const productSize = this.getAttribute('data-size');
            const productIntro = this.getAttribute('data-intro');
            const productPrice = this.getAttribute('data-price');

            // modal 內容
            document.getElementById('productName').textContent = productName;
            document.getElementById('modalImg').src = productImg;
            document.getElementById('modalImg').alt = productName;
            document.getElementById('productSize').textContent = productSize;
            document.getElementById('productPrice').textContent = productPrice;
            document.getElementById('productIntro').textContent = productIntro;

            // 顯示彈窗
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // 關閉彈出視窗
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// 私訊預訂按鈕
function goToOrder() {
    window.open('https://www.facebook.com/profile.php?id=100064318952721&mibextid=LQQJ4d', '_blank');
}

//

// top 按鈕
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}