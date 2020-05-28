const save = text => {
  localStorage.setItem('note', text);
}

const load = () => localStorage.getItem('note') || '';