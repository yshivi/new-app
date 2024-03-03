import { Stack, Button } from '@mui/material'
function Categories({ changeCategory }) {
    let category = ["business", "entertainment", "general", "health", "science", "sports"]
    return (
        <div className='button'>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                {category.map((categorys, index) => {
                    return <Button variant="contained" disableElevation key={index} onClick={() => changeCategory(categorys)}>{categorys}</Button>
                })}
            </Stack>
        </div>
    )
}

export default Categories