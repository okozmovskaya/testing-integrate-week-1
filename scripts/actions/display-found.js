'use strict';

const displayFoundHandler = () => {
  console.log('-- action: display found --');
  console.log('found', typeof found, '\n', found);

  if (_) {
    alert('no found value');
  } else {
    alert('found: \n' + found);
  }
};
