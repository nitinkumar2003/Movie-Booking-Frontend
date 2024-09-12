import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './Button';

const SectionTitle = ({ title, seeAll = false }) => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold">{title}</h2>
    {seeAll && (
      <Button variant="link" className="text-primary">
        See all <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    )}
  </div>
);

export { SectionTitle };
