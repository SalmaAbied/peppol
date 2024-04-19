// interface BlogPost {
//   id: string;
//   date: string;
//   title: string;
//   subtitle: string;
//   articleTitle: string;
//   articlePartOne: {
//     title?: string; 
//     content: string;
//   };
//   articlePartTwo?: {
//     title?: string;
//     content: string;
//   };
//   articlePartThree?: {
//     title?: string; 
//     content: string;
//   };
//   articlePartFour?: {
//     title?: string; 
//     content: string;
//   };
//   articlePartFive?: {
//     title?: string; 
//     content: string;
//   };
//   category: string;
//   imageUrl: string;
//   extraImg?: string;
//   extraImg1?: string;
// }

interface TranslatedBlogPost {
  nl: BlogPost;
  fr: BlogPost;
}

interface BlogItemProps {
  post: BlogPost;
}

// Contact pagina accordion
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

// Blog Article
// interface BlogPost {
//   [blogId:string]: TransObject
// }

// interface TransObject {
//   [lang:string]: LangTrans;
//   imageUrl?: string
// }

// interface LangTrans {
//   date: string;
//   title: string;
//   subtitle: string;
//   [key:string]: any
// }








// =======================

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
  title:    string;
  content:  string;
  image_id: number;
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