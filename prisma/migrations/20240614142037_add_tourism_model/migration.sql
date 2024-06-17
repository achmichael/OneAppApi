/*
  Warnings:

  - Added the required column `mapUrl` to the `Tourism` table without a default value. This is not possible if the table is not empty.
  - Made the column `rating` on table `tourism` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tourism` ADD COLUMN `mapUrl` VARCHAR(191) NOT NULL,
    MODIFY `rating` DOUBLE NOT NULL;
