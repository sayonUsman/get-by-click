import React from "react";
import {
  Navbar,
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  Checkbox,
  Radio,
} from "@material-tailwind/react";

export default function CollapseNavigationBar() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="block lg:hidden">
      <div className="w-full shadow-md shadow-blue-gray-700">
        <Navbar className="fixed top-0 z-10 max-w-full bg-gradient-to-b from-blue-gray-100 to-white text-black shadow-md shadow-blue-gray-700 rounded-none py-0 px-0">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="ml-3 cursor-pointer py-1.5 font-semibold"
            >
              Get By Click
            </Typography>

            <div className="flex items-end">
              <Button
                onClick={openDrawer}
                className="my-3 mr-3 p-3 rounded-full bg-gradient-to-b from-blue-gray-100 to-white text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </Navbar>
      </div>

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="bg-gradient-to-b from-blue-gray-100 to-white"
      >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray" className="font-agba">
            Sort By
          </Typography>

          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
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
      </Drawer>
    </div>
  );
}
