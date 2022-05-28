-- CreateEnum
CREATE TYPE "Status" AS ENUM ('RECEIVED', 'QUOTED', 'BOOKED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "Carrier" AS ENUM ('UPS', 'FEDEX', 'USPS');

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "sku" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "gramsPerItem" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "salesOrderId" TEXT,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quote" (
    "id" SERIAL NOT NULL,
    "carrier" "Carrier"[],
    "priceCents" DOUBLE PRECISION NOT NULL,
    "salesOrderId" TEXT,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesOrder" (
    "id" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "status" "Status",
    "carrierPricePaid" DOUBLE PRECISION,
    "carrierBooked" "Carrier"
);

-- CreateIndex
CREATE UNIQUE INDEX "SalesOrder_id_key" ON "SalesOrder"("id");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_salesOrderId_fkey" FOREIGN KEY ("salesOrderId") REFERENCES "SalesOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_salesOrderId_fkey" FOREIGN KEY ("salesOrderId") REFERENCES "SalesOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
