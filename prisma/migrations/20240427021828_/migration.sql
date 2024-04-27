/*
  Warnings:

  - You are about to drop the `akun` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "akun";

-- CreateTable
CREATE TABLE "cloud" (
    "id" SERIAL NOT NULL,
    "gambar" TEXT[],

    CONSTRAINT "cloud_pkey" PRIMARY KEY ("id")
);
