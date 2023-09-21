import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  @Get()
  index() {
    return ['hello category'];
  }

  @Post()
  store() {
    return {};
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return {
      id,
    };
  }
}
