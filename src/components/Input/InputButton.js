import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Loader from '../Loader';

export default function InputButton({ isLoading, onSubmit }) {
  return (
    <IconButton
      aria-label='Search'
      className='Input__search-icon'
      onClick={onSubmit}
    >
      {isLoading ? <Loader /> : <SearchIcon />}
    </IconButton>
  );
}