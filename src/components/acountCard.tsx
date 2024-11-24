import { Card, Typography } from "@mui/material";
import { Account } from "../data/types";

interface AccountCardProps {
    account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
    const imagePath = new URL(`../assets/${account.provider}.jpg`, import.meta.url).href;
    return (
        <Card sx={{ outlineColor: "blue", textAlign: "center"}}>
            <img src={imagePath} height={100}></img>
            <Typography variant="h6">{account.name}</Typography>
            <Typography variant="overline">{account.type}</Typography>
            <Typography variant="h4">£{account.balance}</Typography>
        </Card>
    );
};

export default AccountCard; 