import { DashboardCustomizeRounded, LogoutRounded, NotificationsNoneRounded, SettingsRounded, NewReleasesRounded, AccountBoxRounded, ApprovalRounded } from "@mui/icons-material";
import { HomeIcon } from "lucide-react";

export const k = {
  NAVLINKS: [
    {
      icon: <DashboardCustomizeRounded />,
      text: "Home",
      pathLink: "/dashboard",
      showInSidebar: true,
    },
    {
      icon: <DashboardCustomizeRounded />,
      text: "Home",
      pathLink: "/mainPage",
      showInSidebar: false,
    },
   
    {
      icon: <NotificationsNoneRounded />,
      text: "Notification",
      pathLink: "/mainPage/notifications",
      showInSidebar: false,
    },
    {
      icon: <SettingsRounded />,
      text: "Settings",
      pathLink: "/dashboard/settings",
      showInSidebar: true,
    },
    {
      icon: <AccountBoxRounded />,
      text: "Profile",
      pathLink: "/mainPage/profile",
      showInSidebar: false,  // This feature won't be shown in the sidebar
    },
    {
      icon: <ApprovalRounded />,
      text: "Post",
      pathLink: "/mainPage/post",
      showInSidebar: false,  // This feature won't be shown in the sidebar
    },
    {
      icon: <LogoutRounded />,
      text: "Logout",
      pathLink: "/",
      showInSidebar: false,  // This feature won't be shown in the sidebar
    },
    
  ],
};
