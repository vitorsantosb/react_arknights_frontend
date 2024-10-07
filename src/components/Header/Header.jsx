import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Stack, Flex, Group, Image, Text } from "@mantine/core";
import { IconHome, IconSettings, IconCurrencyDollar, IconUsersGroup, IconPlus } from "@tabler/icons-react";
import { headerData } from "@/models/models.js";
import { useEffect } from "react";

const getHeaderIcons = (icon) => {
    switch (icon) {
        case "IconHome":
            return <IconHome size={34} stroke={2.5} />;
        case "IconUsersGroup":
            return <IconUsersGroup size={34} stroke={2.5} />;
        case "IconSettings":
            return <IconSettings size={34} stroke={2.5} />;
        case "IconCurrencyDollar":
            return <IconCurrencyDollar size={34} stroke={2.5} />;
        case "IconPlus":
            return <IconPlus size={34} stroke={2.5} />;
        default:
            return "";
    }
};

function Header({ activePath, isMobile }) {
    const navigate = useNavigate();

    const links = () => {
        return headerData.map((item) => (
            <Button
                onClick={() => navigate(item.link)}
                key={item.name}
                style={{
                    color: activePath === item.link ? "#0041bb" : "white",
                    textDecoration: "none",
                    fontSize: "1rem",
                    background: "transparent",
                    alignContent: "center",
                    padding: "0.2rem",
                    height: "100%",
                }}
                styles={{
                    root: {
                        background: "transparent",
                        height: "100%",
                    },
                }}
            >
                <Stack gap={"0.5rem"} align={"center"}>
                    {getHeaderIcons(item.icon)}
                    <Text align="center">{item.name}</Text>
                </Stack>
            </Button>
        ));
    };

    return (
        <Flex justify={"space-around"} align={"center"} bg={"transparent"} p={"1rem"} style={{ width: "100%" }} gap={"1rem"}>
            {!isMobile ? (
                <Group h={"100%"}>
                    <Text order={1} size={"2rem"} align={"left"} style={{ color: "white" }}>
                        ARKNIGHTS
                    </Text>
                    {links()}
                </Group>
            ) : (
                links()
            )}
        </Flex>
    );
}

Header.propTypes = {
    activePath: PropTypes.string,
};

export default Header;
