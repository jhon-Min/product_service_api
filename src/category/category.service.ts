import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/categoryDto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  getAllCategory() {
    return this.categoryRepository.find();
  }

  createCategory(data: CreateCategoryDto) {
    const category = this.categoryRepository.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.categoryRepository.save(category);
  }

  updateCategory(id: number, data: UpdateCategoryDto) {
    let category = this.categoryRepository.findOne({ where: { id } });
    this.categoryRepository.update({ id }, { ...data, updatedAt: new Date() });

    return { success: true };
  }

  getCategory(id: any) {
    const category = this.categoryRepository.findOne({ where: { id } });
    return category;
  }

  deleteCategory(id: any) {
    const category = this.categoryRepository.findOne({ where: { id } });
    this.categoryRepository.delete(id);
    return { success: true };
  }
}
