import { NextResponse } from "next/server";

export async function GET() {
  const registro = [
    { tipo: "Street Lighting", compania: "Alliance", costo: 1250 },
    { tipo: "Street Lighting", compania: "Alliance", costo: 1250 },
    { tipo: "Street Lighting", compania: "Helm", costo: 1250 },
    { tipo: "Street Lighting", compania: "Helm", costo: 1250 },
    { tipo: "Street Lighting", compania: "Flatbush Avenue", costo: 1250 },
    { tipo: "Indoor Lighting", compania: "Helm", costo: 980 },
    { tipo: "Indoor Lighting", compania: "Alliance", costo: 1100 }
  ];

  return NextResponse.json(registro);
}
