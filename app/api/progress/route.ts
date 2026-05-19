import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEET_ID!,
  serviceAccountAuth
);

export async function GET() {
  try {

    await doc.loadInfo();

    const sheet = doc.sheetsByTitle["progress_dashboard"];

    const rows = await sheet.getRows();
    
    const data = rows.map((row) => ({
  nama: row.get("Nama Program / Unit"),
  progress: Number(row.get("Progress (%)")),
  status: row.get("Status"),
  statusColor: row.get("Status Color"),
  color: row.get("Color"),
  
}));

    return NextResponse.json(data);

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      error: "Gagal mengambil data",
    });

  }
}