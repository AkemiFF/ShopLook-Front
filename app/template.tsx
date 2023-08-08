import { FC } from "react";

interface templateProps {
    children: React.ReactNode
}
 
const template: FC<templateProps> = ({children}) => {
    return <div>{children}</div>
}
 
export default template;