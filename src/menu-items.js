export default {
  items: [
    {
      id: "navigation",
      title: "Navigation",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/",
          icon: "feather icon-home"
        },
        {
          id: "transactions",
          title: "Transactions",
          type: "item",
          url: "/transactions",
          icon: "feather icon-credit-card"
        },
        // {
        //   id: "accounts",
        //   title: "Accounts",
        //   type: "item",
        //   url: "/accounts",
        //   icon: "fas fa-university"
        // },
        {
          id: "limits",
          title: "Limits",
          type: "item",
          url: "/limits",
          icon: "fas fa-piggy-bank"
        },
        {
          id: "reports",
          title: "Reports",
          type: "item",
          icon: "feather icon-file-text",
          url: "/reports"
        },
        {
          id: "familyMembers",
          title: "Family Members",
          type: "item",
          icon: "feather icon-users",
          url: "/familymembers"
        },
        {
          id: "settings",
          title: "Settings",
          type: "item",
          url: "/settings",
          icon: "feather icon-settings"
        }
      ]
    }
  ]
};
