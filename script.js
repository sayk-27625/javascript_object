// JavaScript
console.log('Hello world!');

const products = [
    { name: 'Apple', price: 1800, image: 'images/img01.png', inStock: true , rank: 2 },
    { name: 'Orange', price: 3500, image: 'images/img02.png', inStock: false , rank: 1 },
    { name: 'Sunset', price: 1200, image: 'images/img03.png', inStock: true , rank: 5 },
    { name: 'Apricot', price: 2100, image: 'images/img04.png', inStock: true  , rank: 6},
    { name: 'Cream', price: 4000, image: 'images/img05.png', inStock: false , rank: 3 },
    { name: 'Lemon', price: 1200, image: 'images/img06.png', inStock: true , rank: 4}
];

console.log('商品配列:', products);
console.log('商品数:', products.length);
console.log('1番目の商品:', products[0]);
console.log('1番目の商品名:', products[0].name);

const productContainer = document.getElementById('product-container');
const showAllBtn = document.getElementById('show-all');
const filterPriceBtn = document.getElementById('filter-price');
const filterStockBtn = document.getElementById('filter-stock');
const filterfavoriteBtn = document.getElementById('filter-rank');

// --- 関数：商品の配列を受け取って、画面にカードを表示する ---
function displayProducts(productArray) {
    productContainer.innerHTML = ''; // 表示エリアを一度空にする

    productArray.forEach(product => {
        // 在庫状況に応じて表示を変える
        const stockStatus = product.inStock ? '　' : 'SOLD OUT';

        // カードのHTMLを文字列として組み立てる
        const cardHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">¥${product.price.toLocaleString()}</p>
                <p class="stock">${stockStatus}</p>
            </div>
        `;
        // 組み立てたHTMLをコンテナに追加
        productContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

//←ここにイベントを追加

showAllBtn.addEventListener('click', () => {
    displayProducts(products); // 全ての商品データをそのまま表示
});

    filterPriceBtn.addEventListener('click', () => {
    // filterを使って、価格が2000円以下の商品だけを絞り込む
    const cheapProducts = products.filter(p => p.price <= 2000);
    displayProducts(cheapProducts); // 絞り込んだ結果を表示

});

filterStockBtn.addEventListener('click', () => {
    // filterを使って、在庫がある商品だけを絞り込む
    const stockProducts = products.filter(p => p.inStock === true);
    displayProducts(stockProducts); // 絞り込んだ結果を表示
});

filterfavoriteBtn.addEventListener('click', () => {
    // filterを使って、人気アイテム
    const favoriteProducts = products.filter(p => p.rank <= 3);
    displayProducts(favoriteProducts); // 絞り込んだ結果を表示
});

displayProducts(products); // 初期表示