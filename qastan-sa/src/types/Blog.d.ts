interface ItemProps {
  answerID: string;
  questionID: string;
  question?: string;
  answer?: string;
  isActive: boolean;
  onClick: () => void;
  ariaExpanded: boolean;
  backgroundColor?: string;
}

type Language = 'nl' | 'fr'

interface Blogpost {
  id:             number;
  imageUrl:       string;
  date_published: string;
  images:         Images;
  category:       number;
  nl:             BlogpostContent;
  fr:             BlogpostContent;
}

interface BlogpostContent {
  title:     string;
  subtitle:  string;
  paragraph: Paragraph[];
}

interface Paragraph {
  title?:    string;
  subtitle?: string;
  content?:  string;
  image_id?: number;
  list?: List[];
}

interface List {
  title?: string;
  content?: string[];
}
interface Images {
  nl: ImageContent[];
  fr: ImageContent[];
}

interface ImageContent {
  image_id: number;
  source:   string;
}

interface Category {
  category_id: number;
  nl: CategoryContent
  fr: CategoryContent
}

interface CategoryContent {
  title: string;
  description: string
}