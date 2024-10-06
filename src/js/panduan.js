import React from "react";
import "../css/panduan.css";

const PanduanPenggunaan = () => {
  return (
    <div className="panduan-container">
      <h2>Panduan Penggunaan</h2>
      <p>Untuk menggunakan kalkulator konversi suhu ini:</p>
      <ol>
        <li>Masukkan suhu yang ingin dikonversi di kotak input.</li>
        <li>Pilih satuan suhu dari dropdown pertama (Celsius, Fahrenheit, atau Kelvin).</li>
        <li>Pilih satuan suhu tujuan dari dropdown kedua.</li>
        <li>Klik tombol "Konversi" untuk mendapatkan hasil.</li>
      </ol>
      <p>Hasil konversi dan rumus akan ditampilkan di bawah tombol konversi.</p>
    </div>
  );
};

export default PanduanPenggunaan;