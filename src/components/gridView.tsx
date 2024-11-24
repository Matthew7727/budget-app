import { Grid2 } from "@mui/material"
import AccountsView from "./accountView"

const GridView: React.FC = () => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={12}>
                <AccountsView/>
            </Grid2>
        </Grid2>
    )
}

export default GridView