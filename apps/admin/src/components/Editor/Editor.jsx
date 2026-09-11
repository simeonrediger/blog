import 'tinymce/tinymce';
import 'tinymce/models/dom/model';
import 'tinymce/themes/silver';
import 'tinymce/icons/default';

import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';

import contentUiCss from 'tinymce/skins/ui/oxide-dark/content.css?inline';
import skinCss from 'tinymce/skins/ui/oxide-dark/skin.css?inline';
import inlineCss from 'tinymce/skins/ui/oxide-dark/content.inline.css?inline';
import styles from './Editor.css?inline';

import { Editor as BaseEditor } from '@tinymce/tinymce-react';

export default function Editor(props) {
  return (
    <BaseEditor
      {...props}
      licenseKey="gpl"
      inline
      initialValue={props.initialContent}
      init={{
        placeholder: props.placeholder,
        required: true,
        skin: false,
        content_css: false,
        content_style: `${skinCss} ${contentUiCss} ${inlineCss} ${styles}`,
        menubar: false,
        plugins: 'link lists',
        toolbar: [
          { name: 'History', items: ['undo', 'redo'] },
          { name: 'Styles', items: ['styles'] },
          {
            name: 'Formatting',
            items: ['bold', 'italic', 'underline', 'link', 'forecolor'],
          },
          { name: 'List formatting', items: ['bullist', 'numlist'] },
          {
            name: 'Alignment',
            items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify'],
          },
          { name: 'Indentation', items: ['outdent', 'indent'] },
        ],
      }}
    />
  );
}
