import config from '@seokminhong/configs/eslint';
import react from '@seokminhong/configs/eslint/react';

export default config({
  extends: [
    react({
      supportsConstantExport: true,
    }),
  ],
});
