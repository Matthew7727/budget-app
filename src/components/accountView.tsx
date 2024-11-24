import { useSelector } from "react-redux"
import { Grid2, Paper, Typography } from "@mui/material";
import AccountCard from "./acountCard";
import { accountsTotal } from "../helpers/account-funcs";
import FilterSortAndSearch from "./FilterSortAndSearch";
import { selectFilteredAccounts, setFilterCriteria } from "../data/state/accountsSlice";
import { AccountFilterCriteria } from "../data/types";

const AccountsView: React.FC = () => {
    const filteredAccounts = useSelector(selectFilteredAccounts);

    const handleFilterChange = (criteria: AccountFilterCriteria) => {
        console.log("Updated filter criteria:", criteria);
        setFilterCriteria(criteria);
      };
       return(
        <Paper sx={{margin:5, textAlign: "center"}}>
            <Typography variant="h2" sx={{fontWeight:"bold"}}>
                Accounts
            </Typography>
            <Typography variant="h4">Total: £{Math.floor(accountsTotal(filteredAccounts))}</Typography>
            <FilterSortAndSearch onFilterChange={handleFilterChange} />
            <Grid2 container>
            {filteredAccounts.map((account) => (
                <Grid2 key={account.id} size={4} padding={2}>
                    <AccountCard account={account}/>
                </Grid2> 
            ))}
            </Grid2>
        </Paper>    
    )


}

export default AccountsView