// header menu mobile //
let getShowMenu = document.querySelector('.show-menu');
function showMenu() {
    getShowMenu.classList.add('open');
}

function hideShowMenu() {
    getShowMenu.classList.remove('open')
}

// Click category-product //
// let categoryProduct = document.querySelectorAll('.category-product');
// categoryProduct.forEach((item) => {
//     item.addEventListener('click', () => {
//         categoryProduct.forEach((item2) => {
//             item2.classList.remove('active');
//         });
//         item.classList.add('active');
//     });
// });

let categoryProduct = document.querySelectorAll('.category-product');
let productsItem = document.querySelectorAll('.products-item img');
console.log(productsItem);

function changeProductList(proList, element) {
    for (i = 0; i < categoryProduct.length; i++) {
        categoryProduct[i].style.background = '#F5F5F5';
        categoryProduct[i].style.color = '#000000';
    }
    element.setAttribute("style", 'background-color: #4200FF; color: #fff;');


    switch (proList) {
        case 'Shinalar':
            productsItem.forEach((img) => {
                img.setAttribute.src = "./img/81qRd54FiWL 1.png";
            });
            break;
        case 'Rullar':
            productsItem.forEach((img) => {
                img.setAttribute.src = "./img/volang.jpg";
            });
            break;
        case 'Orindiqlar':
            productsItem.forEach((img) => {
                img.setAttribute.src = "./img/seat.png";
            });
            break;
        case 'Akkumlyatorlar':
            productsItem.forEach((img) => {
                img.setAttribute.src = "./img/battery.png";
            });
            break;
        default:
            break;
    }
}



