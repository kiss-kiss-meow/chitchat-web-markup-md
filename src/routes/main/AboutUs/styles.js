export default ({ mainColorPalette, spacing }) => ({
  root: {
    height: '100%',
    backgroundColor: mainColorPalette[50],
    paddingTop: spacing.unit * 5
  },
  image: {
    minWidth: '100px',
    maxWidth: '400px',
    objectFit: 'contain',
    '&>img': {
      maxWidth: '100%',
      height: 'auto'
    }
  },
  info: {
    minWidth: '200px',
    color: mainColorPalette[500]
  }
})
