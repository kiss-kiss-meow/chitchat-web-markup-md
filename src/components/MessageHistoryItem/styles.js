export default ({ mainColorPalette }) => ({
  root: {
    // Material UI workaround: GridListTile isn't received 'width', 'height', 'padding' after decomposition (GridList & GridListTile are in different files)
    width: '100%',
    height: 'auto',
    padding: '6px',
    // Material UI workaround end.
  },
  message: {
    display: 'inline-flex',
    padding: '5px 10px',
    backgroundColor: mainColorPalette[50],
    borderRadius: '10px',
  },
  myMessageAlign: {
    textAlign: 'right',
  },
  myMessageBackground: {
    backgroundColor: mainColorPalette[200],
  },
})
