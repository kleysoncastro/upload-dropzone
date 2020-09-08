import React, { ReactNode } from 'react';

import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';
import logoCloudUpload from '../../assets/cloud_upload.svg';

interface UploadProps {
  onUpload: Function;
}
const Drop: React.FC<UploadProps> = ({ onUpload }: UploadProps) => {
  function renderDragMessage(
    isDragActive: boolean,
    isDragRejest: boolean,
  ): ReactNode {
    if (!isDragActive) {
      return (
        <UploadMessage>Selecione ou arraste o arquivo aqui.</UploadMessage>
      );
    }

    if (isDragRejest) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  }
  return (
    <>
      <Dropzone
        accept="image/jpeg, image/png"
        onDropAccepted={acceptedFiles => onUpload(acceptedFiles)}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }): any => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <img src={logoCloudUpload} alt="logo" />
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    </>
  );
};

export default Drop;
