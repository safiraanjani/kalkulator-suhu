import React, { useState } from "react";
import "../css/kalkulator-suhu.css";

const KalkulatorSuhu = () => {
  const [temperature, setTemperature] = useState("");
  const [unitFrom, setUnitFrom] = useState("Celsius");
  const [unitTo, setUnitTo] = useState("Fahrenheit");
  const [result, setResult] = useState("");
  const [formula, setFormula] = useState("");

  const convertTemperature = () => {
    let temp = parseFloat(temperature);
    let convertedTemp;
    let formulaUsed = "";

    // Cek apakah unit dari dan ke sama
    if (unitFrom === unitTo) {
      convertedTemp = temp; // Hasil sama dengan suhu yang dimasukkan
      formulaUsed = `S(${unitTo.charAt(0)}) = S(${unitFrom.charAt(0)})`; // Menampilkan rumus
    } else {
      if (unitFrom === "Celsius") {
        if (unitTo === "Fahrenheit") {
          convertedTemp = (temp * 9) / 5 + 32;
          formulaUsed = `S(°F) = (S(°C) × 9/5) + 32`;
        } else {
          convertedTemp = temp + 273.15;
          formulaUsed = `S(K) = S(°C) + 273.15`;
        }
      } else if (unitFrom === "Fahrenheit") {
        if (unitTo === "Celsius") {
          convertedTemp = ((temp - 32) * 5) / 9;
          formulaUsed = `S(°C) = (S(°F) - 32) × 5/9`;
        } else {
          convertedTemp = ((temp - 32) * 5) / 9 + 273.15;
          formulaUsed = `S(K) = (S(°F) - 32) × 5/9 + 273.15`;
        }
      } else {
        if (unitTo === "Celsius") {
          convertedTemp = temp - 273.15;
          formulaUsed = `S(°C) = S(K) - 273.15`;
        } else {
          convertedTemp = ((temp - 273.15) * 9) / 5 + 32;
          formulaUsed = `S(°F) = (S(K) - 273.15) × 9/5 + 32`;
        }
      }
    }

    setResult(convertedTemp.toFixed(2));
    setFormula(formulaUsed);
  };

  return (
    <div className="kalkulator-container">
      <h1>Kalkulator Konversi Suhu</h1>
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Masukkan suhu"
      />
      <select value={unitFrom} onChange={(e) => setUnitFrom(e.target.value)}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <span> ke </span>
      <select value={unitTo} onChange={(e) => setUnitTo(e.target.value)}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <button onClick={convertTemperature}>Konversi</button>
      {result && (
        <h2>
          Hasil: {result} °{unitTo.charAt(0)}
        </h2>
      )}
      {formula && <h3>Rumus: {formula}</h3>}
    </div>
  );
};

export default KalkulatorSuhu;
