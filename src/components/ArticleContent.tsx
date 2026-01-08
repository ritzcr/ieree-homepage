import { ArticleSection } from "@/data/articles";

interface ArticleContentProps {
  sections: ArticleSection[];
}

export default function ArticleContent({ sections }: ArticleContentProps) {
  return (
    <div className="space-y-4">
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading":
            return (
              <h2 key={index} className="text-xl font-bold mt-8 mb-4">
                {section.content}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index} className="mb-4 leading-relaxed">
                {section.content}
              </p>
            );
          case "list":
            return (
              <ul key={index} className="list-disc pl-5 mb-4 space-y-2">
                {section.items?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
