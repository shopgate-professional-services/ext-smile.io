import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config';
/**
 * @returns {JSX}
 */
const CustomFont = () => {
  const { fontFamily } = config || {};
  if (!fontFamily) {
    return null;
  }

  const { secondaryFontFamilyUrl, primaryFontFamilyUrl } = fontFamily;

  if (secondaryFontFamilyUrl === primaryFontFamilyUrl) {
    return (
      <Helmet>
        <link href={secondaryFontFamilyUrl} rel="stylesheet" />
      </Helmet>
    );
  }

  return (
    <Helmet>
      <link href={secondaryFontFamilyUrl} rel="stylesheet" />
      <link href={primaryFontFamilyUrl} rel="stylesheet" />
    </Helmet>
  );
};

export default CustomFont;
