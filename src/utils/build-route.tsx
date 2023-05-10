import * as PagesRegister from '@/client/pages';
import * as LayoutRegister from '@/client/layouts';
const buildRoute = (routes: any) => {

    return routes.map((route: any) => {
        const {page, layout} = route;
        // @ts-ignore
        const LayoutElement = layout ? LayoutRegister[layout] : LayoutRegister['Default'];
        // @ts-ignore
        const PageElement = PagesRegister[page];
        route.element = <LayoutElement> <PageElement/> </LayoutElement>;

        if (route.children?.length > 0) {
            route.children = buildRoute(route.children);
        }
        return route;
    })
}

export default buildRoute;