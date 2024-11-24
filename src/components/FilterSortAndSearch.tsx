import { Card, Grid2 } from "@mui/material"
import { useSelector } from "react-redux";
import FilterAccounts from "./FilterAccounts";
import { AccountFilterCriteria } from "../data/types";
import { selectAccountProviders, selectAccountTypes } from "../data/state/accountsSlice";
import { useState } from "react";

interface FilterSortAndSearchProps {
    onFilterChange: (criteria: AccountFilterCriteria) => void;
}

const FilterSortAndSearch: React.FC<FilterSortAndSearchProps> = ({onFilterChange}) => {
    const accountTypes = useSelector(selectAccountTypes)
    const accountProviders = useSelector(selectAccountProviders)

    const [accountType, setAccountType] = useState<string[]>([]);
    const [accountProvider, setAccountProvider] = useState<string[]>([]);
  
    const handleTypeChange = (selected: string[]) => {
        setAccountType(selected);
        onFilterChange({ accountType: selected, accountProvider });
      };
    
      const handleProviderChange = (selected: string[]) => {
        setAccountProvider(selected);
        onFilterChange({ accountType, accountProvider: selected });
      };
    
    return (
        <Card sx={{marginLeft: 2, marginRight: 2, boxShadow:"none"}}>
            <Grid2 container>
                <Grid2 size={2}>
                    <FilterAccounts 
                    accountTypes={accountTypes} 
                    accountProviders={accountProviders}
                    onTypeChange={handleTypeChange}
                    onProviderChange={handleProviderChange}
                    />
                </Grid2>
            </Grid2>
        </Card>
    )
}

export default FilterSortAndSearch