const childrenOffset = "2.5rem";
export const menuTree = {
  main: {
    homepage: {
      label: "Inicio",
      leftSection: "IconCustomHome",
      link: "/",
      active: 0,
    },
    characters: {
      label: "Operadores",
      leftSection: "IconRPGSpace",
      childrenOffset: childrenOffset,
      active: 1,
      children: [
        {
          label: "Lista",
          link: "/list-character",
          activeChild: 1.1,
        },
      ],
    },
    chat: {
      label: "Chat",
      link: "/chat",
      leftSection: "IconMessages",
      childrenOffset: childrenOffset,
      active: 2,
    },
    updates: {
      label: "Updates",
      leftSection: "IconCustomUpdates",
      link: "/updates",
      active: 3,
    },
    plans: {
      label: "Plans",
      leftSection: "IconCustomPlans",
      childrenOffset: childrenOffset,
      active: 4,
      children: [
        {
          label: "Subscribe",
          link: "/subscribe",
          activeChild: 4.1,
        },
        {
          label: "Plan Configuration",
          link: "/plans",
          activeChild: 4.2,
        },
        {
          label: "Change plan",
          link: "/plans",
          activeChild: 4.2,
        },
        {
          label: "Cancel plan",
          link: "/plans",
          activeChild: 4.2,
        },
      ],
    },
    schedule: {
      label: "Schedule",
      leftSection: "IconCustomSchedule",
      link: "/schedule",
      active: 5,
    },
  },
  options: {
    settings: {
      label: "Settings",
      leftSection: "IconCustomSettings",
      childrenOffset: childrenOffset,
      active: 6,
      children: [
        {
          label: "Link account",
          link: "/link-account",
          activeChild: 6.1,
        },
        {
          label: "Manage accounts",
          link: "/manage-accounts",
          activeChild: 6.2,
        },
        {
          label: "General",
          link: "/general-configuration",
          activeChild: 6.3,
        },
      ],
    },
  },
  footer: {
    help: {
      label: "Help",
      leftSection: "IconCustomHelp",
      link: "/help",
      active: 7,
    },
    logout: {
      label: "login",
      leftSection: "IconCustomDoorEnter",
      active: 8,
      openModal: true
    },
  },
};

export function getMenuTree() {
  return menuTree;
}
