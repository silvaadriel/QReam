import React from 'react';

import {
  QRCodeCamMaskContainer,
  QRCodeCamMaskColumn,
  QRCodeCamMaskColumnFrame,
  QRCodeCamMaskFrame,
  QRCodeCamMaskRow,
  QRCodeCamMaskRowFrame
} from './styles';

const QRCodeCamMask: React.FC = () => (
  <QRCodeCamMaskContainer>
    <QRCodeCamMaskRow />

    <QRCodeCamMaskRowFrame>
      <QRCodeCamMaskColumn />

      <QRCodeCamMaskColumnFrame>
        <QRCodeCamMaskFrame />
      </QRCodeCamMaskColumnFrame>

      <QRCodeCamMaskColumn />
    </QRCodeCamMaskRowFrame>

    <QRCodeCamMaskRow />
  </QRCodeCamMaskContainer>
);

export default QRCodeCamMask;
