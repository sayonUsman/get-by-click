import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";

import {
  PlusIcon,
  HomeIcon,
  ShoppingCartIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function DefaultSpeedDial() {
  return (
    <div className="fixed bottom-2 right-3">
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full bg-black">
            <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </IconButton>
        </SpeedDialHandler>

        <SpeedDialContent>
          <Link to="/">
            <SpeedDialAction>
              <HomeIcon className="h-5 w-5" />
            </SpeedDialAction>
          </Link>

          <Link to="/cart">
            <SpeedDialAction>
              <ShoppingCartIcon className="h-5 w-5" />
            </SpeedDialAction>
          </Link>

          <Link to="/help-center">
            <SpeedDialAction>
              <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
            </SpeedDialAction>
          </Link>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
