/*
  Warnings:

  - Made the column `status` on table `SalesOrder` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "SalesOrder" ALTER COLUMN "status" SET NOT NULL;
