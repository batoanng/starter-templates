import express, { Request, Response } from 'express';
import { ApiBadRequestError } from '../../errors';
import { prisma } from '../../prisma-client';

const router = express.Router();

router.post('/sales-orders', async (req: Request, res: Response) => {
    try {
        const createdSalesOrder = await prisma.salesOrder.create({
            data: {
                id: req.body.id,
                customer: req.body.customer,
                status: 'RECEIVED',
                items: {
                    create: req.body.items
                },
                quotes: {
                    create: req.body.quotes
                },
                ...(req.body.carrierBooked && { carrierBooked: req.body.carrierBooked }),
                ...(req.body.carrierPricePaid && { carrierPricePaid: req.body.carrierPricePaid })
            }
        });

        const salesOrder = await prisma.salesOrder.findFirst({
            where: { id: createdSalesOrder.id },
            select: {
                id: true,
                customer: true,
                status: true,
                items: {
                    select: {
                        sku: true,
                        quantity: true,
                        gramsPerItem: true,
                        price: true
                    }
                },
                quotes: {
                    select: {
                        carrier: true,
                        priceCents: true
                    }
                },
                carrierBooked: createdSalesOrder.carrierBooked !== null,
                carrierPricePaid: createdSalesOrder.carrierPricePaid !== null
            }
        });
        res.json(salesOrder);
    } catch (e) {
        console.log(e);
        // @ts-ignore
        throw new ApiBadRequestError(`Cannot create sales order: ${e.message}`);
    }
});

export { router as createSalesOrdersRouter };
