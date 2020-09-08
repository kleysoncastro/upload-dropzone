import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface UploadProps {
  isDragActive: boolean;
  isDragReject: boolean;
  refKey?: string;
  [key: string]: any;
  type?: 'error' | 'success' | 'default';
}

const dragActive = css`
  border-color: #12a454;
`;

const dragReject = css`
  border: 2px dashed #e83f5b;
`;
export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  border: 1.5px dashed #969cb3;
  border-radius: 5px;
  cursor: pointer;
  width: 400px;
  height: 100px;

  display: flex;
  align-items: center;

  svg {
    padding: 4px 0 0 0;
  }

  transition: height 0.2s ease;

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragActive && dragActive}

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragReject && dragReject}
`;

const messageColors = {
  default: '#5636D3',
  error: '#e83f5b',
  success: '#12a454',
};
export const UploadMessage = styled.p`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  padding: 48px 0;
  margin-left: 10px;

  color: ${({ type }: UploadProps) => messageColors[type || 'default']};

  justify-content: center;
  align-items: center;
`;
