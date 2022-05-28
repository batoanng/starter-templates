import express, { Request, Response } from 'express';
import { prisma } from '../../prisma-client';
import { Status } from '@prisma/client';
import { ApiBadRequestError } from '../../errors';

const router = express.Router();

router.get('/sales-orders', async (req: Request, res: Response) => {
    try {
        const { status } = req.query;

        const salesOrders = await prisma.salesOrder.findMany({
            where: { status: status as Status },
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
                carrierBooked: true,
                carrierPricePaid: true
            }
        });
        res.json({
            salesOrders: salesOrders.map((salesOrder: any) => {
                const {carrierBooked, carrierPricePaid, ...newSalesOrder} = salesOrder;
                if (carrierBooked) newSalesOrder.carrierBooked = carrierBooked;
                if (carrierPricePaid) newSalesOrder.carrierPricePaid = carrierPricePaid;
                return newSalesOrder;
            })
        });
    } catch (e) {
        // @ts-ignore
        throw new ApiBadRequestError(`Cannot get sales orders: ${e.message}`);
    }
});

export { router as getSalesOrdersRouter };
