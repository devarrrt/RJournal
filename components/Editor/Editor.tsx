import React from 'react';
import EditorJS from '@editorjs/editorjs';

const Editor: React.FC = () => {

  React.useEffect(() => {

    const editor = new EditorJS({
      holder: 'editorjs',
      placeholder: 'Введите текст вашей статьи'
    });

    return () => {
      editor.isReady.then(() => {
        editor.destroy();
      })
        .catch(e => console.error('ERROR editor cleanup', e));
    }
  }, []);

  return (
    <div id="editorjs"/>
  );
};

export default Editor