import React from 'react';
import logoCloudUpload from '../../assets/cloud_upload.svg';

// import Upload from '../../components/Upload';
import Drop from '../../components/Drop';

import { Container, Box, DragContainer } from './styles';

const Home: React.FC = () => {
  function submitFile(files: File[]): void {
    console.log(files);
  }

  return (
    <>
      <Container>
        <Box>
          <p>Upload Files</p>
          <DragContainer>
            <Drop onUpload={submitFile}>
              <img src={logoCloudUpload} alt="logo" />
              <p>Arraste e solte </p>
              <a href="test">Brower</a>
            </Drop>

            <button>Salve</button>
          </DragContainer>
        </Box>
      </Container>
    </>
  );
};

export default Home;
