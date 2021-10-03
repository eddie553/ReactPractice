import React from 'react';
import Responsive from '../components/common/Responsive';
import TagBox from '../components/write/TagBox';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtons from '../components/write/WriteActionButtons';
import TagBoxContainer from '../containers/write/TagBoxContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
