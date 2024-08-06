import { DashboardCustomizeRounded, LogoutRounded, NotificationsNoneRounded, SettingsRounded } from "@mui/icons-material";
import { HomeIcon } from "lucide-react";

export const k ={
    NAVLINKS : [
        {
            icon:<DashboardCustomizeRounded/>,
            text:"Home",
            pathLink:"/dashboard"
        },
        {
            icon:<NotificationsNoneRounded/>,
            text:"Notification",
            pathLink:"/dashboard/notification"
        },
    
       
        {
            icon:<SettingsRounded/>,
            text:"Settings",
            pathLink:"/dashboard/settings"
        },

        {
            icon:<LogoutRounded/>,
            text:"Logout",
            pathLink:"/dashboard/settings"
        },
       
      
        
    ]
}