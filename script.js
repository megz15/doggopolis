function getDogFact() {
    fetch('https://www.dogfactsapi.ducnguyen.dev/api/v1/facts/?number=1').then(
        response => {if (response.ok) return response.json();}
    ).then(
        data => {
            var fact = data['facts'].toString();
            document.getElementById('fact').innerHTML = fact.charAt(0).toLowerCase() + fact.substring(1);
        }
    );
}

window.getDogFact = getDogFact;
getDogFact();

var dogs = [
    ['Catahoula Leopard Dog', 'https://img.dog-learn.com/dog-breeds/catahoula-leopard-dog/catahoula-leopard-puppy-i4.jpg'],
    ['Nova Scotia Duck Tolling Retriever', 'https://thumbs.dreamstime.com/b/dog-nova-scotia-duck-tolling-retriever-walking-summer-park-sitting-tree-background-white-flowers-orchard-72212435.jpg'],
    ['Cardigan Welsh Corgi', 'https://2.bp.blogspot.com/-8_NhlAK01Kc/WqKP3rXCgiI/AAAAAAAAEGU/mUifkCj2hpUqZhCwMVIDRjcyMeszA3CUACEwYBhgL/s0/pembroke-welsh-corgi.jpg'],
    ['Samoyed', 'https://i.pinimg.com/originals/b1/a7/56/b1a756a4f6646b69a7aec82319bd173f.jpg'],
    ['Shiba Inu', 'https://justsomething.co/wp-content/uploads/2019/05/this-shiba-inu-loves-flowers-and-these-are-10-of-his-cutest-photos-10.jpg'],
    ['English Cocker Spaniel', 'https://i.pinimg.com/originals/bd/e1/9a/bde19aafa7eb7f9aa5d66605a6cdc46a.jpg'],
    ['Bernese Mountain Dog', 'https://i.pinimg.com/originals/44/aa/da/44aada32622aaaef55065eafc18bab17.jpg'],
    ['Australian Shepherd', 'https://i1.pickpik.com/photos/389/844/932/flowers-dog-shepherd-puppy-preview.jpg'],
    ['Golden Retrivers', 'https://thegoldensclub.com/wp-content/uploads/2021/01/0562490B-4638-4122-96E3-B77632ABB00E.jpeg'],
    ['Dalmation', 'https://i.pinimg.com/originals/c5/20/98/c520983bc556ee9432257d53779b9506.jpg'],
    ['Bulldog', 'https://i.pinimg.com/originals/fe/da/c2/fedac201e4860ac7a843b4d35a986f55.jpg']
];

for (var d in dogs) {
    var newCard = document.createElement('div');
    newCard.className = "card";
    newCard.innerHTML = `
    <img class="card-image" src="${dogs[d][1]}" alt="${dogs[d][0]}" height="200px"/>
    <div class="card-caption">${dogs[d][0]}</div>
    `;
    document.getElementById('cards').appendChild(newCard);
}

fetch('https://programming-quotes-api.herokuapp.com/quotes/random').then(
    response => {if (response.ok) return response.json();}
).then(
    data => {
        var [quote, author] = [data['en'], data['author']];
        document.getElementById('quote').innerHTML = quote;
        document.getElementById('author').innerHTML = '- ' + author;
    }
);