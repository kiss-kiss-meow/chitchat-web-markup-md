import logo from './logo.jpeg'

export default ({ spacing, breakpoints, transitions, palette }) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 100,
    width: '10%',
  },
  buttonBase: {
    width: spacing.unit * 10,
    height: spacing.unit * 10,
    position: 'relative',
    [breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
  },
  imageSrc: {
    height: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    backgroundImage: `url(${logo})`,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: palette.common.black,
    opacity: 0.4,
    transition: transitions.create('opacity'),
  },
  link: {
    textDecoration: 'none',
  },
})
