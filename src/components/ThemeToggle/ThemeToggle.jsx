import { useDispatch } from 'react-redux';
import { toggleTheme } from 'redux/Theme/ThemeSlice';
import { Switch } from '@mui/material';


const ThemeToggler = () => {
  const dispatch = useDispatch();

  return (
    <>
          <Switch
            defaultChecked
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            onClick={() => {
              dispatch(toggleTheme());
            }}
            />
    </>
  );
}

export default ThemeToggler