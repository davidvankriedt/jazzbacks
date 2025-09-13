import { Ionicons } from "@expo/vector-icons"

export const icon = {
            index: (props: any) => <Ionicons name={"home-outline"} size={40} {...props} />,
            shop: (props: any) => <Ionicons name={"cart-outline"} size={40} {...props}/>,
            player: (props: any) => <Ionicons name={"play-outline"} size={40} {...props} />,
            profile: (props: any) => <Ionicons name={"person-outline"} size={40} {...props}/>,
            search: (props: any) => <Ionicons name={"search-outline"} size={40} {...props}/>,
            menu: (props: any) => <Ionicons name={"menu-outline"} size={40} {...props}/>,
        }