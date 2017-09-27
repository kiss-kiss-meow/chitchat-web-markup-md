export default ({ mainColorPalette, spacing }) => ({
  root: {
    height: '100%',
    backgroundColor: mainColorPalette[50],
    paddingTop: spacing.unit * 5,
  },
  infoItem: {
    color: mainColorPalette[500],
    padding: spacing.unit * 4,
  },
  image: {
    minWidth: '100px',
    maxWidth: '400px',
    objectFit: 'contain',
    '&>img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  btn: {
    color: mainColorPalette[50],
    backgroundColor: mainColorPalette[500],
    marginTop: spacing.unit * 4,
    '&:hover': {
      backgroundColor: mainColorPalette[300],
    },
  },
})
