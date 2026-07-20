import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          borderRadius: "12px",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "500",
        },
        success: {
          style: {
            background: "#ecfdf5",
            color: "#065f46",
            border: "1px solid #a7f3d0",
          },
          iconTheme: {
            primary: "#059669",
            secondary: "#ecfdf5",
          },
        },
        error: {
          style: {
            background: "#fef2f2",
            color: "#991b1b",
            border: "1px solid #fecaca",
          },
          iconTheme: {
            primary: "#dc2626",
            secondary: "#fef2f2",
          },
        },
      }}
    />
  );
};

export default Toast;
