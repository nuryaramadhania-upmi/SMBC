import { GoogleSpreadsheet } from "google-spreadsheet";

const SHEET_ID = process.env.google_sheet_id!;

export async function getProgressData() {

  const doc = new GoogleSpreadsheet(SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: process.env.client_email!,
    private_key: process.env.private_key!.replace(/\\n/g, "\n"),
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle("progress_dashboard");

  const rows = await sheet.getRows();

  return rows.map((row) => ({
    nama: row.get("nama"),
    progress: Number(row.get("progress")),
    status: row.get("status"),
    color: row.get("color"),
  }));
}