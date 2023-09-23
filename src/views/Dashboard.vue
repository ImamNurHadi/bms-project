  <template>
      <div class="container">
        <div class="welcome">
          <div class="welcome-text">
          welcome to our website!
          </div>
          <button class="welcome-button"> More</button>
        </div>

        <div class="mtt">
          <div class="mtt-text">
              Meet The Team
          </div>

          <div class="mtt-team">
              <div style="display: flex; flex-direction: row; justify-content: center; gap: 10vh; ">
                      <div class="foto" style="display: flex; flex-direction: column;">
                          <div class="foto-orang">
                            <img class="foto-anggota"  src="../assets/etha.png">
                              <img class="foto-pause"  src="../assets/pasue-h.png">
                          </div>
                          <div class="foto-nama">
                            <div class="foto-sebutan" style="color:rgba(255, 255, 255, 1) ;">
                                Etha
                            </div>
                            <div class="foto-lengkap" style="color: rgba(163, 163, 163, 1);">
                              Etha Felisya Br Purba
                            </div>

                          </div>
                         
                      </div>
                          
                      <div class="foto" style="display: flex; flex-direction: column;">
                          <div class="foto-orang">
                            <img class="foto-anggota"  src="../assets/arka.png">
                              <img class="foto-pause"  src="../assets/pasue-h.png">
                          </div>
                          <div class="foto-nama">
                            <div class="foto-sebutan" style="color:rgba(255, 255, 255, 1) ;">
                                Areuka
                            </div>
                            <div class="foto-lengkap" style="color: rgba(163, 163, 163, 1);">
                              M. Arkananta Radithya
                            </div>

                          </div>
                         
                      </div>
                          
                      <div class="foto" style="display: flex; flex-direction: column;">
                          <div class="foto-orang">
                            <img class="foto-anggota"  src="../assets/imam.jpg">
                              <img class="foto-pause"  src="../assets/pasue-h.png">
                          </div>
                          <div class="foto-nama">
                            <div class="foto-sebutan" style="color:rgba(255, 255, 255, 1) ;">
                                Klunting
                            </div>
                            <div class="foto-lengkap" style="color: rgba(163, 163, 163, 1);">
                                Imam Nurhadi
                            </div>

                          </div>
                         
                      </div>
                          
                      <div class="foto" style="display: flex; flex-direction: column;">
                          <div class="foto-orang">
                            <img class="foto-anggota"  src="../assets/atha.png">
                              <img class="foto-pause"  src="../assets/pasue-h.png">
                          </div>
                          <div class="foto-nama">
                            <div class="foto-sebutan" style="color:rgba(255, 255, 255, 1) ;">
                                Atha
                            </div>
                            <div class="foto-lengkap" style="color: rgba(163, 163, 163, 1);">
                              Atha Rahma Arianti
                            </div>

                          </div>
                         
                      </div>
               </div>
            </div>

        

          </div>

        <div class="karya">
           <div class="mtt-text" style="margin-bottom: 5%;">
              Our Network
          </div>
          <div class="karya-place">
            <div class="karya-foto">
              <img class="foto-1"  src="../assets/fotografis.png">
            </div>
            <div class="karya-teks">
                <div class="judul">FOTOGRAFI</div>
                <div class="isi">Fotografi adalah seni menangkap keindahan dan momen berharga dalam satu frame. Dengan kamera, kita bisa berbicara tanpa kata-kata dan membagikan kisah visual yang mendalam. Berikut adalah beberapa karya kami di bidang fotografi.</div>
                <div class="tombol"> <button class="tombol1"> More</button> </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <style>

    body
  {
    background-image: url("../assets/bek.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin: 0;

    overflow-x: hidden;
    color: white;
  }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0; /* Menghilangkan margin default dari body */
    }
    
    .welcome {
      display: flex;
      flex-direction: column;
      font-family: Montserrat;
      font-size: 8vh;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 70vh;
      margin-top: 5vh;
      margin-bottom: 5vh;

      color: aliceblue;
      /* Anda tidak perlu menggunakan align-items dan justify-content di sini */
    }

    .welcome-button
    {
      width: 11vh;
      height: 4vh;
      background-color: rgba(29, 185, 84, 1);
      border-radius: 20vh;
    }

    .mtt
    {
      display: flex;
      flex-direction: column;
      background-color: black ;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      width: 100%;
      height: 70vh;
      align-items: center;

    }
    .mtt-text
    {
      display: flex;
      background-color: rgba(29, 185, 84, 1);
      color: black;
      width: 20%;
      height: 8vh;
      border-radius: 5vh;
      margin-top: 1vh;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      justify-content: center;
      align-items: center;

      font-family: Montserrat;
      font-size: 3vh;
    }
    .mtt-team
    {
      display: flex;
      flex-direction: row;

      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      width: 100%;
      height: 50vh;
      justify-content: center;
      align-items: center;
    }

    .foto:hover {
  background-color: rgba(40, 40, 40, 1); /* Ganti dengan warna latar belakang yang Anda inginkan */
  /* Tambahan properti CSS lainnya jika diperlukan */
}

    .foto {
  display: flex;
  position: relative;
  flex-direction: column; /* Mengubah flex-direction menjadi column */
  background-color: rgba(25, 20, 20, 1);
  width: 30vh;
  height: 35vh;
  gap: 5vh;
  justify-content: center;
  align-items: center; /* Menambahkan align-items: center; untuk posisi vertikal */
  border-radius: 8%;
}

.foto .foto-orang {
  
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  width: 70%;
  height: 70%;
  border-radius: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
}

  .foto .foto-orang img.foto-pause {
    position: absolute; /* Tambahkan properti position: absolute; */
    bottom: 0;
    right: 0;
    width: 30%;
    /* z-index: 1; Atur z-index ke nilai yang lebih tinggi daripada foto-anggota */
  }

  .foto .foto-orang img.foto-anggota {
  margin-top: 20%;
  overflow-x: hidden;
    width: 100%;
    height: 100%;
    /* z-index: 0; Atur z-index ke nilai yang lebih rendah daripada foto-pause */
    border-radius: 8%;
  }

  .karya
  {
       display: flex;
      flex-direction: column;
      background-color: black;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      width: 100%;
      height: 70vh;
      align-items: center;

  }

  .karya .karya-place
  {
    display: flex;
      
      /* background-color: red;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
      width: 95%;
      height: 70vh;
      align-items: left;

  }

  .karya .karya-foto {
    display: flex;
    flex-direction: column;
    /* background-color: purple; */
    
    
    width: 30%;
    height: 50%;
    
}

.foto-1 {
    width: 60%;
    height: auto;
    z-index: 0;
    border-radius: 8%;
    align-self: center; 
}

  .karya .karya-teks
  {
    display: flex;
      flex-direction: column;
      /* background-color: green; */
  
      width: 30%;
      height: 50%;
      align-items: left;
  }

  .judul
  {
    color: rgba(255, 255, 255, 1);
    font-family: Montserrat;
    text-align: left;
    font-size: 5vh;
    margin-top: 2%;
    margin-bottom: 3%;
    
  }
  .isi
  {
    color: rgba(255, 255, 255, 1);
    font-family: Montserrat;
    text-align: left;
  }
 

  .tombol1
  { 
    font-family: Montserrat;
    margin-top: 5%;
    width: 15%;
    height: 4vh;
    
    background-color: rgba(29, 185, 84, 1);
    border-radius: 20vh;
  }
    </style>
    