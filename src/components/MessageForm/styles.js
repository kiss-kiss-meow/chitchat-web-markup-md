export default ({ mainColorPalette }) => ({
  root: {
    padding: '5px'
  },
  textField: {
    '&:before': {
      content: 'none'
    },
    '&:after': {
      backgroundColor: mainColorPalette[100]
    }
  }
})
