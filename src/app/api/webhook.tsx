import type { NextApiRequest, NextApiResponse } from 'next';

// Sederhana, simpan QR terakhir di memori server
let latestQrCode: string | null = null;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Pastikan body adalah JSON
    if (req.headers['content-type'] !== 'application/json') {
      return res.status(400).json({ error: 'Expected Content-Type: application/json' });
    }

    const body = req.body;
    console.log('Webhook received:', body); // Log untuk debugging

    // Cek apakah ini event QR dan simpan datanya
    if (body && body.event === 'qr' && body.data && body.data.qr) {
      latestQrCode = body.data.qr;
      console.log('QR Code updated:', latestQrCode);
    }

    // Kirim respons OK
    res.status(200).json({ message: 'Webhook received' });
  } else if (req.method === 'GET') {
    // Endpoint GET untuk mengambil QR terakhir (dipakai oleh frontend)
    res.status(200).json({ qrCode: latestQrCode });
  }
   else {
    // Handle metode lain jika perlu
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}