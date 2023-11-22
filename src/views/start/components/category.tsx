import { Select, SelectItem } from '@nextui-org/react';

import { CATEGORIES } from '@/constants/categories';

interface CategoryProps {
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Category({ onCategoryChange }: CategoryProps) {
  return (
    <Select
      size="sm"
      label="카테고리"
      placeholder="카테고리를 선택해주세요."
      className="mt-10"
      onChange={onCategoryChange}
    >
      {CATEGORIES.map((category) => (
        <SelectItem key={category.value} value={category.value}>
          {category.label}
        </SelectItem>
      ))}
    </Select>
  );
}
