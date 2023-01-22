import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/filterSlice';
import { TextField } from '@mui/material';
import { inputStyle } from 'utils/FormStyle';

const Filter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.filter.filter);

    return (
        <>  
            <TextField
                type="text"
                id='Filter'
                label="Find contacts by name"
                value={filterValue}
                onChange={e => dispatch(updateFilter(e.target.value))}
                sx={inputStyle}
            />
        </>
    );
}

export default Filter;
