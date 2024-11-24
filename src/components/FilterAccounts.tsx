import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material"

interface FilterAccountsProps {
    accountTypes: string[];
    accountProviders: string[];
    onTypeChange: (selectedTypes: string[]) => void;
    onProviderChange: (selectedProviders: string[]) => void;
}

const FilterAccounts: React.FC<FilterAccountsProps> = ({
    accountTypes,
    accountProviders,
    onTypeChange,
    onProviderChange
}) => {
    const handleTypeChange = (event: SelectChangeEvent<string[]>) => {
        const selected = event.target.value as string[];
        onTypeChange(selected);
      };
    
      const handleProviderChange = (event: SelectChangeEvent<string[]>) => {
        const selected = event.target.value as string[];
        onProviderChange(selected);
      };
    return (
        <Stack direction="row" spacing={2}>
            <FormControl fullWidth>
                <InputLabel id="filter-account-type-label">Account Type</InputLabel>
                <Select
                    id="filter-account-type"
                    labelId="filter-account-type-label"
                    multiple
                    value={accountTypes}
                    onChange={handleTypeChange}
                    renderValue={(selected) => (selected as string[]).join(", ")} // Displays selected values as comma-separated text
                >
                    {accountTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="filter-account-provider-label">Account Provider</InputLabel>
                <Select
                    id="filter-account-provider"
                    labelId="filter-account-provider-label"
                    multiple
                    value={accountProviders} // Controlled value from parent state
                    onChange={handleProviderChange}
                    renderValue={(selected) => (selected as string[]).join(", ")} // Displays selected values as comma-separated text
                >
                    {accountProviders.map((provider) => (
                        <MenuItem key={provider} value={provider}>
                            {provider}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Stack>
    )

}

export default FilterAccounts