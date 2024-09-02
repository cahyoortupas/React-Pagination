-- CreateTable
CREATE TABLE "Personaldata" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,

    CONSTRAINT "Personaldata_pkey" PRIMARY KEY ("id")
);
