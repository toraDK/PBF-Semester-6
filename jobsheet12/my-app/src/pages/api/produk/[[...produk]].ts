// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
    retrieveDataByID,
    retrieveProducts,
} from "@/utils/db/servicefirebase";

type Data = {
    status: boolean;
    status_code: number;
    data: unknown;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    // Ambil array produk
    const produkQuery = req.query.produk;

    // Cek apakah ada ID di indeks ke-0
    if (produkQuery && produkQuery[0]) {
        const data = await retrieveDataByID("products", produkQuery[0]);
        
        if (!data) {
        return res.status(404).json({ status: false, status_code: 404, data: null });
        }

        res.status(200).json({ status: true, status_code: 200, data });
        return;
    } else {
        // Jika tidak ada parameter (URL: /api/produk), ambil semua list
        const data = await retrieveProducts("products");
        res.status(200).json({ status: true, status_code: 200, data });
    }
}