import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function CheckListHotel({
  data,
  checked,
  setChecked,
  country = null,
  setCountry,
  city,
  setCity,
}) {
  const [left, setLeft] = useState(data);

  useEffect(() => {
    setLeft(data);
  }, [data]);

  // const leftChecked = intersection(checked, left);

  const handleToggle = (value) => () => {
    const cntry = data.filter((d) => d.country?.includes(value));
    console.log("cntry", cntry);
    console.log("handleToggle", value);
    cntry.length > 0 ? setCountry(value) : setCity(value);
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
    <List
      sx={{
        width: "100%",
        // maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      dense
      component="div"
      role="list"
    >
      {items.map((value) => {
        const val = value.country ? value?.country : value;

        const labelId = `transfer-list-item-${val}-label`;

        return (
          <ListItem
            key={val}
            role="listitem"
            button
            onClick={handleToggle(val)}
            sx={{
              "&.MuiListItem-root": {
                padding: "0",
                width: "100%",
                // backgroundColor: "red",
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
                checked={checked.indexOf(val) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{
                  "aria-labelledby": labelId,
                }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${val}`} />
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
            width: "100%",
          },
        }}
      >
        {customList(left)}
      </Grid>
    </Grid>
  );
}
