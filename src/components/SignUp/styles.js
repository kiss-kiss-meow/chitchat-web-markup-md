export default ({ mainColorPalette, spacing }) => ({
  root: {
    minWidth: '200px',
  },
  header: {
    textAlign: 'center',
    color: mainColorPalette[50],
    backgroundColor: mainColorPalette[500],
  },
  textFields: {
    paddingTop: spacing.unit * 2,
    paddingBottom: spacing.unit * 6,
  },
  txt: {
    paddingTop: spacing.unit,
    paddingBottom: spacing.unit,
  },
  button: {
    width: '100%',
    color: mainColorPalette[50],
    backgroundColor: mainColorPalette[500],
    '&:hover': {
      backgroundColor: mainColorPalette[700],
    },
  },
})
