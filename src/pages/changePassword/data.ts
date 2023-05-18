import avatar2 from "../../../static/assets/images/avatar2.jpg";
export const data = {
  headerData: {
    headerContent: "Change Password",
  },
  avatarData: {
    avatarUrl: avatar2,
    class: "img1",
  },
  formData: {
    buttonData: {
      buttonContent: "Save changes",
      type: "Submit",
    },
    inputs: [
      {
        placeholder: "old password",
        type: "password",
        isLabel: true,
        label: "password",
        name: "oldPassword",
        events: {}
      },
      {
        placeholder: "new password",
        type: "password",
        isLabel: true,
        label: "password",
        name: "newPassword",
        events: {}
      },
      {
        placeholder: "repeat new password",
        type: "password",
        isLabel: true,
        label: "password",
        name: "newPassword",
        events: {}
      },
    ],
  },
  footerData: {
    footerContent: "Go back to Profile",
    isFooter: true,
    linkUrl: "https://ya.ru",
    linkContent: "go to Profile",
  }
};
