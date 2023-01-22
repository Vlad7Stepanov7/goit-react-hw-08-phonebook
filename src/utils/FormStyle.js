export const formStyle = {
    display: "flex",
  flexDirection: "column",
    mt: "15px",
    ml: "auto",
    mr: "auto",
    width: "30%",
}

export const inputStyle = {
    height: "50px",
    mb: "15px",
    
    '& label.Mui-focused': {
    color: '#eaf003',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#eaf003',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#eaf003',
    },
    '&:hover fieldset': {
      borderColor: '#eaf003',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#eaf003',
    },
  },
}