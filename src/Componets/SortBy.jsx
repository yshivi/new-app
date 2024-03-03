import { Select, Box, InputLabel, MenuItem, FormControl } from '@mui/material'

function SortBy({ sortBy, handleChange }) {
    return (
        <div className="sort-container">
            <Box sx={{ minWidth: 120 }}>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Options</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortBy}
                        label="SortBy"
                        onChange={handleChange}
                    >
                        <MenuItem value={"relevancy"}>Relevancy</MenuItem>
                        <MenuItem value={"popularity"}>Popularity</MenuItem>
                        <MenuItem value={"publishedAt"}>PublishedAt</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}

export default SortBy
