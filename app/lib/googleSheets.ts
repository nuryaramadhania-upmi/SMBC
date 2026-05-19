import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const SHEET_ID = process.env.SHEET_ID!;

const serviceAccountAuth = new JWT({
  email: process.env.CLIENT_EMAIL,
  key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

export async function getProgressData() {

  const doc = new GoogleSpreadsheet(
    SHEET_ID,
    serviceAccountAuth
  );

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  const rows = await sheet.getRows();

  return rows.map((row) => ({
    nama: row.get("nama"),
    progress: row.get("progress"),
  }));
}