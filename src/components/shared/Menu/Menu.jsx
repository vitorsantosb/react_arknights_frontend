import { useLayoutContext } from "../../Layouts/LayoutProvider";
import MenuLayout from "./MenuLayout";
import { useDisclosure } from '@mantine/hooks';

export function Menu() {
    const { currentUser } = useLayoutContext();
    const authorizedRole = currentUser?.role?.slug?.toUpperCase();
    
    return <>{authorizedRole ? <MenuLayout /> : ""}</>;
}

export default Menu;
