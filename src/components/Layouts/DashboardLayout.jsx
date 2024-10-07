import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppShell } from "@mantine/core";
import Header from "@/components/Header/Header.jsx";

export const DashboardLayout = (props) => {
    const { pathname } = useLocation();
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 768;
    return (
        <AppShell
            {...(isMobile && { navbar: { hidden: true } })}
            styles={{
                header: { background: "#001D3D", border: "none" },
                main: { background: "#f5f5f5", paddingBottom: isMobile ? "60px" : "0", marginTop: !isMobile ? "50px" : "0" },
            }}
        >
            {!isMobile && (
                <AppShell.Header>
                    <Header activePath={pathname} isMobile={isMobile} />
                </AppShell.Header>
            )}
            <AppShell.Main pt={!isMobile ? "60px" : "0"} bg={"#001D3D"}>
                {props.children}
            </AppShell.Main>
            {isMobile && (
                <div style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "#001D3D"}}>
                    <Header activePath={pathname} isMobile={isMobile} />
                </div>
            )}
        </AppShell>
    );
};
