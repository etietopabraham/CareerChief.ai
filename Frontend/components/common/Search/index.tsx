import { SearchIcon } from '@/public/svgs';
import React, { useState, useEffect } from 'react';
import { SearchStyles } from './styles';

interface SearchType {
  placeholder?: string;
  handleSearch: (term: string) => void;
}

const Search = ({ placeholder, handleSearch }: SearchType) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  return (
    <SearchStyles>
      <input
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="search">
        <SearchIcon />
      </div>
    </SearchStyles>
  );
};

export default Search;
