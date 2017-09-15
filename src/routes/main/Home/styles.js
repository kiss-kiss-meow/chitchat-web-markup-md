export default ({ mainColorPalette, spacing }) => ({
  content: {
    backgroundColor: mainColorPalette[50],
    paddingTop: spacing.unit * 5,
    paddingRight: '25%'
  },
  images: {
    minWidth: '200px',
    '&>img': {
      maxWidth: '100%',
      maxHeight: 'auto'
    }
  },
  info: {
    minWidth: '200px',
    fontSize: '2rem',
    color: mainColorPalette[500]
  },
  btn: {
    color: mainColorPalette[50],
    backgroundColor: mainColorPalette[500],
    marginTop: spacing.unit * 4,
    '&:hover': {
      backgroundColor: mainColorPalette[300]
    }
  }
})
