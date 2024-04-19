// Blog tabs
import React from 'react';
import { useTranslation } from 'react-i18next';

interface TabsProps {
  categories: Category[]
  activeTab: number;
  onTabClick: (category:number) => void;
}

const Tabs: React.FC<TabsProps> = ({ categories, activeTab, onTabClick }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-wrap justify-center mb-8">
      <button
          className={`mr-4 my-2 focus:outline-none ${activeTab === -1 ? 'bg-legoBlue text-white' : 'bg-[#eaf6f6] '} py-2 px-4 rounded-md`}
          onClick={() => onTabClick(-1)}
        >
          {t("Blog.All")}
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`mr-4 my-2 focus:outline-none ${activeTab === category.category_id ? 'bg-legoBlue text-white' : 'bg-[#eaf6f6] '} py-2 px-4 rounded-md`}
          onClick={() => onTabClick(category.category_id)}
        >
          {category[i18n.language as Language].title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
