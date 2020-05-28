// Need to import Note
// Need to import save
// Need to import load

const note = new Note(document.getElementById('text'), document.getElementById('save-button'));
note.onSave((text) => save(text))
note.setText(load());
