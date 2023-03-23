function hitung() {
    var berat = document.getElementById("berat").value;
    var tinggi = document.getElementById("tinggi").value;

    var hasil = berat / (tinggi * tinggi);
    if(hasil < 18.5){

        document.getElementById("keterangan1").innerHTML = "Kekurangan Berat badan ";
        document.getElementById("hasil").innerHTML =hasil;
        document.getElementById("keterangan2").innerHTML = "Anda kekurangan berat badan";
        document.getElementById("btnunduh").innerHTML = " <button>Download Hasil BMI</button>";
        document.getElementById("value").innerHTML = "Hasil BMI dibawah 18.5";
        document.getElementById("deskripsi1").innerHTML = "Anda berada dalam kekurangan berat badan. <br> Untuk menaikkan berat badan anda, anda perlu memakan makanan yang berprotein dan memperhatikan banyaknya makanan yang dikonsumsi.";
        document.getElementById("btn").innerHTML = "<button>Konsutasi Ahli Gizi Via Aplikasi</button> <button>Registrasi Online Ahli Gizi</button>"
        document.getElementById("deskripsi2").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seesorang. Anda perlu berkonsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda";
        document.getElementById("penyakit").innerHTML = "<h4>Beberapa Penyakit dari kekurangan Berat badan </h4> <br> <ul>hipertiroidisme</ul><ul>kanker</ul><ul>Diabetes</ul> ";
        document.getElementById("btnkonsultasi").innerHTML = "<button>Konsultasi Dokter Via Aplikasi</button> <button>Register Online Sekarang</button>";

    }
    else if(hasil = 18.5 && hasil <= 24.9){
        document.getElementById("keterangan1").innerHTML = "Berat badan Normal";
        document.getElementById("hasil").innerHTML = hasil;
        document.getElementById("keterangan2").innerHTML = "Berat badan anda Normal";
        document.getElementById("btnunduh").innerHTML = " <button>Download Hasil BMI</button>";

        document.getElementById("value").innerHTML = "Hasil BMI antara 18.5 sampai 24.9";
        document.getElementById("deskripsi1").innerHTML = "Anda berada dalam kateogri Normal, tidak anda yang perlu diragukan lagi.";
        document.getElementById("btn").innerHTML = "<button>Konsutasi Ahli Gizi Via Aplikasi</button> <button>Registrasi Online Ahli Gizi</button>"

        document.getElementById("deskripsi2").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seesorang. Anda perlu berkonsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda";
        document.getElementById("penyakit").innerHTML = " Tidak ditemukan Penyakit";
        document.getElementById("btnkonsultasi").innerHTML = "<button>Konsultasi Dokter Via Aplikasi</button> <button>Register Online Sekarang</button>";

    }
    else if(hasil = 25.0 && hasil <= 29.9){
        document.getElementById("keterangan1").innerHTML = "Kelebihan Berat Badan";
        document.getElementById("hasil").innerHTML =  hasil;
        document.getElementById("keterangan2").innerHTML = "Anda kelebihan berat badan";
        document.getElementById("btnunduh").innerHTML = " <button>Download Hasil BMI</button>"

        document.getElementById("value").innerHTML = "Hasil BMI diantara 25.0 dan 29.9";
        document.getElementById("btn").innerHTML = "<button>Konsutasi Ahli Gizi Via Aplikasi</button> <button>Registrasi Online Ahli Gizi</button>"

        document.getElementById("deskripsi1").innerHTML = "Anda berada dalam kategori berat badan berlebih. <br> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur pola makan sehat dan rutin berolahrga";
        document.getElementById("deskripsi2").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seesorang. Anda perlu berkonsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda";
        document.getElementById("penyakit").innerHTML = "<h4>Beberapa Penyakit dari Kegemukan </h4> <br> <ul>Diabetes</ul><ul>Hipertensi</ul><ul>Sakit Jantung</ul> ";
        document.getElementById("btnkonsultasi").innerHTML = "<button>Konsultasi Dokter Via Aplikasi</button> <button>Register Online Sekarang</button>";

    }
    else if(hasil >= 30.0){
        document.getElementById("keterangan1").innerHTML = "Kegemukan";
        document.getElementById("hasil").innerHTML = hasil;
        document.getElementById("keterangan2").innerHTML = "Berat badan anda Kegemukan";
        document.getElementById("btnunduh").innerHTML = " <button>Download Hasil BMI</button>";

        document.getElementById("value").innerHTML = "Hasil BMI diatas 30.00";
        document.getElementById("deskripsi1").innerHTML = "Anda berada dalam badan kegemukan. <br> Untuk mengurangi berat badan anda, anda perlu mengonsumsi sayur-sayuran dan mengurangi konsumsi makanan berproteing tinggi.";
        document.getElementById("btn").innerHTML = "<button>Konsutasi Ahli Gizi Via Aplikasi</button> <button>Registrasi Online Ahli Gizi</button>";

        document.getElementById("deskripsi2").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seesorang. Anda perlu berkonsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda";
        document.getElementById("penyakit").innerHTML = "<h4>Beberapa Penyakit dari Kegemukan </h4> <br> <ul>Diabetes</ul><ul>Hipertensi</ul><ul>Sakit Jantung</ul> ";
        document.getElementById("btnkonsultasi").innerHTML = "<button>Konsultasi Dokter Via Aplikasi</button> <button>Register Online Sekarang</button>";

    }
}
