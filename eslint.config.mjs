// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  [
    {
      rules: {
        '@typescript-eslint/no-extraneous-class': [
          'error',
          {
            allowStaticOnly: true,
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
)
