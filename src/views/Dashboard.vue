  <template>
      <div class="container">
        <div class="welcome">
          <div class="welcome-text">
          welcome to our website!
          </div>
          <button class="welcome-button"> More</button>
        </div>

        <div class="mtt">
          <di class="mtt-text">
              Meet The Team
          </di>

          <div class="mtt-team">
              <div style="display: flex; flex-direction: row; justify-content: center; gap: 10vh; ">
                      <div class="foto" style="display: flex; flex-direction: column;">
                          <div class="foto-orang">
                            <img class="foto-anggota"  src="../assets/foto_hafozh.jpg">
                              <img class="foto-pause"  src="../assets/pasue-h.png">
                          </div>
                          <div class="foto-nama">
                            <div class="foto-sebutan" style="color:rgba(255, 255, 255, 1) ;">
                                Imam Nurhadi
                            </div>
                            <div class="foto-lengkap" style="color: rgba(163, 163, 163, 1);">
                                Jack Klunting
                            </div>

                          </div>
                         
                      </div>
                          
                      <div class="foto">
                          
                      </div>
                          
                      <div class="foto">
                          
                      </div>
                          
                      <div class="foto">
                          

                      </div>
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
      background-color: aquamarine;
      width: 90%;
      height: 70vh;
      align-items: center;

    }
    .mtt-text
    {
      display: flex;
      background-color: rgba(29, 185, 84, 1);
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
      background-color: red;
      width: 90%;
      height: 50vh;
      justify-content: center;
      align-items: center;
    }

    .foto:hover {
  background-color: black; /* Ganti dengan warna latar belakang yang Anda inginkan */
  /* Tambahan properti CSS lainnya jika diperlukan */
}

    .foto {
  display: flex;
  position: relative;
  flex-direction: column; /* Mengubah flex-direction menjadi column */
  background-color: wheat;
  width: 30vh;
  height: 35vh;
  gap: 5vh;
  justify-content: center;
  align-items: center; /* Menambahkan align-items: center; untuk posisi vertikal */
  border-radius: 8%;
}

.foto .foto-orang {
  
  width: 60%;
  height: 60%;
  border-radius: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: blue;
}

  .foto .foto-orang img.foto-pause {
    position: absolute; /* Tambahkan properti position: absolute; */
    bottom: 0;
    right: 0;
    width: 30%;
    z-index: 1; /* Atur z-index ke nilai yang lebih tinggi daripada foto-anggota */
  }

  .foto .foto-orang img.foto-anggota {
    width: 120%;
    height: auto;
    z-index: 0; /* Atur z-index ke nilai yang lebih rendah daripada foto-pause */
    border-radius: 8%;
  }
    </style>
    