import {Header} from "@/client/components/Header";
// @ts-ignore
export const Default = ({ children }) => {
    return (
        <div className={'default-layout'}>
            <Header/>
            <div className={'main'}>{children}</div>
            <div className={'footer'}>Footer</div>
        </div>
    )
}