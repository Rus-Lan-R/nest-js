import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'all products';
  }

  @Get(':id')
  getById(@Param('id') id: string): string {
    return 'id ' + id;
  }

  @Post()
  create(@Body() createProductDTO: CreateProductDTO) {
    return 'title ' + createProductDTO.title;
  }
}
