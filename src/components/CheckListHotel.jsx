import { useState } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function CheckListHotel({ data, checked, setChecked }) {
  const [left, setLeft] = useState(data);

  const leftChecked = intersection(checked, left);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const customList = (items) => (
    <List dense component="div" role="list">
      {items.map((value) => {
        const labelId = `transfer-list-item-${value}-label`;

        return (
          <ListItem
            key={value + 77}
            role="listitem"
            button
            onClick={handleToggle(value)}
            sx={{
              "&.MuiListItem-root": {
                padding: "0",
              },
            }}
          >
            <ListItemIcon
              sx={{
                "&.MuiListItemIcon-root": {
                  minWidth: "42px",
                },
              }}
            >
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{
                  "aria-labelledby": labelId,
                }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${value}`} />
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
      <Grid
        item
        sx={{
          "&.MuiGrid-root": {
            paddingLeft: "0",
            paddingTop: "0",
          },
        }}
      >
        {customList(left)}
      </Grid>
    </Grid>
  );
}
