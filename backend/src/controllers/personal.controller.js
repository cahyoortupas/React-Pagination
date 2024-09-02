import prisma from "../utils/client.js";

export const getPersonaldata = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const offset = page * limit;

    const totalRows = await prisma.personaldata.count({
      where: {
        OR: [
          {
            first_name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            last_name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            gender: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            ip_address: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(totalRows / limit);
    const response = await prisma.personaldata.findMany({
      where: {
        OR: [
          {
            first_name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            last_name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            gender: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            ip_address: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
      skip: offset,
      take: limit,
      orderBy: {
        id: "desc",
      },
    });
    return res.status(200).json({
      result: response,
      page,
      limit,
      totalRows,
      totalPages,
    });
  } catch (error) {
    console.log(error);
  }
};
