import { ButtonGroup, Button } from '@mui/material';

function Header({ language, setLanguaseClick }) {
    return (
        <div>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button onClick={setLanguaseClick}>{language === "en" ? ("english") : ("spanish")}</Button>
            </ButtonGroup>
        </div>
    )
}
export default Header