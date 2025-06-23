import { researchPapers } from '@/lib/data';
import { ResearchPaperCard } from '@/components/cards/research-paper-card';

export function ResearchSection() {
  return (
    <section id="research" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Favourite <span className="text-primary">Research Papers</span> to Read
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          These are some of my favourite research papers. My own will be added here soon!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchPapers.map((paper) => (
            <ResearchPaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </section>
  );
}
