export default ({ mainColorPalette: palette, spacing }) => ({
  flex: {
    flex: 1,
  },
  appBar: {
    backgroundColor: palette[500],
  },
  menuButton: {
    marginLeft: spacing.unit,
    marginRight: spacing.unit * 2,
    color: palette[50],
  },
  button: {
    color: palette[50],
  },
  link: {
    textDecoration: 'none',
  },
})
