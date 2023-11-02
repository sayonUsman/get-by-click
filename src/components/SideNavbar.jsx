import {
  Card,
  Checkbox,
  Typography,
  List,
  ListItem,
  Button,
  Radio,
} from "@material-tailwind/react";
import CollapseNavigationBar from "./CollapseNavigationBar";

export default function SideNavbar() {
  return (
    <>
      <Card className="hidden lg:block fixed bg-gradient-to-b from-blue-gray-100 to-white h-full min-h-screen w-full max-w-[20rem] rounded-none p-4">
        <div className="mb-2 p-4 rounded-none">
          <Typography variant="h5" color="blue-gray" className="font-agba">
            Sort By
          </Typography>
        </div>

        <List>
          <ListItem className="py-1">
            <Radio name="type" label="Men" />
          </ListItem>

          <ListItem className="py-1">
            <Radio name="type" label="Women" />
          </ListItem>

          <ListItem className="py-1">
            <Radio name="type" label="Kids" />
          </ListItem>

          <ListItem className="py-1">
            <Checkbox label="Offer" />
          </ListItem>

          <ListItem className="py-1">
            <Checkbox label="Low Prices" />
          </ListItem>

          <ListItem className="py-1 rounded-none">
            <Button className="w-full rounded-none bg-white text-black">
              Clear
            </Button>
          </ListItem>
        </List>
      </Card>

      <CollapseNavigationBar />
    </>
  );
}
