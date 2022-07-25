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

function changeProductList(proList, element) {
    for (i = 0; i < categoryProduct.length; i++) {
        categoryProduct[i].classList.remove('active');
    }
    element.classList.add('active');

    switch (proList) {
        case 'Shinalar':
            productsItem.forEach((img) => {
                img.setAttribute('src', './img/81qRd54FiWL 1.png');
            });
            break;
        case 'Rullar':
            productsItem.forEach((img) => {
                img.setAttribute('src', './img/volang.png');
            });
            break;
        case 'Orindiqlar':
            productsItem.forEach((img) => {
                img.setAttribute('src', './img/seat.png');
            });
            break;
            case 'Akkumlyatorlar':
                productsItem.forEach((img) => {
                img.setAttribute('src', './img/battery.png');
            });
            break;
        default:
            break;
    }
}

//  Pagination //
let paginationItem = document.querySelectorAll('.pagination-item');
paginationItem.forEach((item) => {
    item.addEventListener('click', () => {
        paginationItem.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    })
})





