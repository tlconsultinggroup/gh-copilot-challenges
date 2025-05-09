
import { PrismaClient, Products } from '@prisma/client';

const prisma = new PrismaClient();

class CategoryService {

async getByCategoryName(categoryId: number, page = 1): Promise<Products[]> {
    return await prisma.products.findMany({
        where: { categoryId },
        skip: (page - 1) * 10,// 10 products per page-pageSize
        take: 10,
        include: {
            reviews: {
                orderBy: [{ date: 'desc' }],
                take: 5,
            },
        },
    });
}
}

export default CategoryService;