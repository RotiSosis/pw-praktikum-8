escapeRoom(null);

function escapeRoom(cat){
    fetch('./menu.json')
    .then((response) => response.json())
    .then((menu) => {
        let begin = menu.menu;
        let card = document.getElementById('branclet');
        console.log(begin.length);
        if(cat == null){
            card.innerHTML = "";
            for (let i = 0; i < begin.length; i++) {
                card.innerHTML +=` <div class="col-md-4" id="uranus">
                                <div class="card" style="width: 18rem; background-color: #423F3E;">
                                <img src="foodimg/${begin[i].gambar}" class="card-img-top" alt="..." style="height: 15rem;">
                                <div class="card-body">
                                <h5 class="card-title">${begin[i].nama} <i>(${begin[i].jenis})</i></h5>
                                <p class="card-text">${begin[i].deskripsi}</p>
                                <span>Harga : ${begin[i].harga} </span> <br>
                                <span> Estimasi : ${begin[i].estimasi} menit</span> 
                                <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                        </div>
                        </div>
                        </div>`;
            };
        }
        else{
            card.innerHTML = "";
            for (let i = 0; i < begin.length; i++) {
                var wasted = begin[i].jenis;
                if(wasted == cat){
                card.innerHTML +=` <div class="col-md-4" id="uranus">
                            <div class="card" style="width: 18rem; background-color: #423F3E;">
                            <img src="foodimg/${begin[i].gambar}" class="card-img-top" alt="..." style="height: 15rem;">
                            <div class="card-body">
                            <h5 class="card-title">${begin[i].nama} <i>(${begin[i].jenis})</i></h5>
                            <p class="card-text">${begin[i].deskripsi}</p>
                            <span>Harga : ${begin[i].harga} </span> <br>
                            <span> Estimasi : ${begin[i].estimasi} menit</span> 
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                    </div>
                    </div>
                    </div>`;
                }
            }
        };
    });
}
