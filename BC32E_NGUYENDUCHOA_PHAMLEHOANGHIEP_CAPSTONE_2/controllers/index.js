function getListShose() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseTypex : 'JSON',
    });
    promise.then(function (result) {
        console.log(result.data.content);
        renderProduct(result.data.content);
    });
    promise.catch(function (error) {
        console.log(error);
    });
};
window.onload = function () {
    getListShose();
}

function renderProduct(arrProduct) {
    var html = '';
    for (var i = 0; i < arrProduct.length; i++) {
        var shose = arrProduct[i];
        html += `
        <div class='card-product'>
        <div class='img-top'>
        <img src="${shose.image}" alt=""/>
        </div>
        <div class='bottom-1'>
        <h4>${shose.name}</h4>
        </div>
        <div class='bottom-2'>
        <span>${shose.shortDescription}</span>
        </div>
        <div class = 'btn-buy-2'>
        <button class='btn-buy-shose'>BuyNow</button>
        </div>
        <div class = 'cost'>
        <p>$${shose.price}</p>
        </div>
        </div>  
        `;
    };
    document.querySelector('#feature-content').innerHTML = html;
    return html;
}