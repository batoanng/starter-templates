import express, { Request, Response } from 'express';
import { prisma } from '../../prisma-client';
import { ApiNotFoundError, ApiBadRequestError } from '../../errors';
import { calculateCarrierFees } from '../../utils/utils';

const router = express.Router();

router.post('/sales-orders/:id/bookings', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { carrier } = req.body;
    const salesOrder = await prisma.salesOrder.findFirst({
        where: { id },
        include: { items: true, quotes: true }
    });

    if (!salesOrder) throw new ApiNotFoundError(`Cannot find sales order by id ${id}`);
    if (salesOrder.items.length <= 0)
        throw new ApiBadRequestError('Quote for the requested carrier booking is not available');

    const updatedSalesOrder = await prisma.salesOrder.update({
        where: { id },
        data: {
            status: 'BOOKED',
            carrierPricePaid: calculateCarrierFees(carrier, salesOrder.items),
            carrierBooked: carrier
        }
    });

    res.json({
        carrierPricePaid: updatedSalesOrder.carrierPricePaid,
        carrierBooked: updatedSalesOrder.carrierBooked
    });
});

export { router as bookingSalesOrdersRouter };
