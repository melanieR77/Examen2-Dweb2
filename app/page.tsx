"use client";

import { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Home() {
  const [datos, setDatos] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/registro")
      .then(res => res.json())
      .then(info => setDatos(info));
  }, []);

  const tipos: any = {};

  datos.forEach(d => {
    if (!tipos[d.tipo]) {
      tipos[d.tipo] = { suma: 0, cantidad: 0 };
    }
    tipos[d.tipo].suma += d.costo;
    tipos[d.tipo].cantidad++;
  });

  const etiquetasTipo = Object.keys(tipos);
  const promedioTipo = etiquetasTipo.map(
    t => tipos[t].suma / tipos[t].cantidad
  );

  const companias: any = {};

  datos.forEach(d => {
    companias[d.compania] = (companias[d.compania] || 0) + 1;
  });

  const etiquetasCompania = Object.keys(companias);
  const cantidadCompania = Object.values(companias);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Visualización de Productos</h2>

      <p>Promedio de costo por tipo</p>
      <Line
        data={{
          labels: etiquetasTipo,
          datasets: [
            {
              label: "Promedio",
              data: promedioTipo
            }
          ]
        }}
      />

      <p>Cantidad de productos por compañía</p>
      <Pie
        data={{
          labels: etiquetasCompania,
          datasets: [
            {
              data: cantidadCompania
            }
          ]
        }}
      />
    </div>
  );
}
