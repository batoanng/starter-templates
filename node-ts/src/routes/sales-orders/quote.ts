import express, { Request, Response } from 'express';
import { prisma } from '../../prisma-client';
import { ApiNotFoundError } from '../../errors';
import { Carrier, generateQuote } from '../../utils/utils';

const router = express.Router();

router.post('/sales-orders/:id/quotes', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { carriers } = req.body;
    const salesOrder = await prisma.salesOrder.findFirst({
        where: { id },
        include: { items: true, quotes: true }
    });

    if (!salesOrder) throw new ApiNotFoundError(`Sales order not found`);

    if (salesOrder.status === 'BOOKED') {
        res.status(400).json({
            error: 'Sales order is already booked'
        });
    }

    res.json({
        quotes: carriers.map((carrier: Carrier) => generateQuote(salesOrder, carrier))
    });
});

export { router as quoteSalesOrdersRouter };
