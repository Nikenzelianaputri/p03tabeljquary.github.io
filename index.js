$(document).ready(function () {
    $("#nama_1").click(function () {
        confirm("Kamu Memilih Rizal Dwi Rizki Apriliansyah, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Rizal Dwi Rizki Apriliansyah");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_1").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_2").click(function () {
        confirm("Kamu Memilih Deni, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Deni");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_2").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_3").click(function () {
        confirm("Kamu Memilih Muzani, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Muzani");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_3").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_4").click(function () {
        confirm("Kamu Memilih Dinda, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Dinda");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_4").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_5").click(function () {
        confirm("Kamu Memilih Mirna, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Mirna");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_5").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_1").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Indramayu");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_1").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_2").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Talun");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_2").innerHTML = nama;
        }
    });
});


$(document).ready(function () {
    $("#alamat_3").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Talun");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_3").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_4").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Depok");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_4").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_5").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Lemah Abang");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_5").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("button").click(function () {
        alert('Sorry Kamu Tidak Bisa Mengapus My Best Friend')
    });
});