import React from 'react';
import { Star, Play, ChevronRight } from 'lucide-react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardContentWrapper = styled.div`
  padding: 16px;
`;

const Card = ({ children, className = '', ...props }) => (
  <CardContainer className={className} {...props}>
    {children}
  </CardContainer>
);

const CardContent = ({ children, className = '', ...props }) => (
  <CardContentWrapper className={className} {...props}>
    {children}
  </CardContentWrapper>
);

const MovieCard = ({ title, rating, image }) => (
  <Card className="overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <CardContent className="p-2">
      <h3 className="font-semibold text-sm truncate">{title}</h3>
      <div className="flex items-center mt-1">
        <Star className="w-4 h-4 text-yellow-400 mr-1" />
        <span className="text-sm">{rating}</span>
      </div>
    </CardContent>
  </Card>
);

export { MovieCard, Card, CardContent };
